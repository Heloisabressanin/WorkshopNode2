import cors from "cors";
import dotenv from "dotenv";
import express, { Request, Response } from "express";

dotenv.config();

const port = process.env.PORT;
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const server = express();
const routeProducts = require("./router/product.js");
const routeUsers = require("./router/user.js");
const routeAuth = require("./router/auth.js");
const Order = require("./models/order.js");




server.use(cors());
server.use(express.json());
server.use(express.static("public"));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

server.use("/products", routeProducts);
server.use("/users", routeUsers);
server.use("/",routeAuth);
server.get("/", (_req: Request, res: Response) => {
  res.send(`Hello world`);
});


// connection BDD
mongoose
  .connect("mongodb://localhost:27017/workshop", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connection established to the database");
  })
  .catch(() => {
    console.log("Connection failed");
  });
  

server.get("/user/orders/:userId", (req, res) => {
  const userId = req.params.userId;

  Order.find({ user: userId })
    .populate("product")
    .exec()
    .then((orders:any) => {
      res.status(200).json({ orders });
    })
    .catch((error:any) => {
      res.status(500).json({ error });
    });
});
server.get("/user/products/:userId", async (req, res) => {
   try {
     const userId = req.params.userId;

     const orders = await Order.find({ user: userId })
       .populate("product")
       .exec();

     const products = orders.map((order:any) => order.product);

     res.status(200).json({ products });
   } catch (error) {
     res.status(500).json({ error });
   }
 }); 
server.listen(port, () => {
  console.log(`Server turn on http://localhost:${port}/ `);
});
