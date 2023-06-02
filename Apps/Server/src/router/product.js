const express = require("express");
const router = express.Router();

const productCtrl = require("../controllers/product");

// routes
//router.post('/',  productCtrl.createProduct);

router.post("/", async (req, res) => {
  const test = await productCtrl.createProduct(req.body);
  return res.json(test);
});

router.get("/", async (req, res) => {
  const allProducts = await productCtrl.getAllProducts(req.body);
  return res.json(allProducts);
});

router.get("/:id", async (req, res) => {
  const oneProduct = await productCtrl.getOneProduct(req.params.id);
  return res.json(oneProduct);
});

router.delete("/:id", async (req, res) => {
  const deleteProduct = await productCtrl.deleteProduct(req.params.id);
  return res.json(deleteProduct);
});

router.put("/:id", async (req, res) => {
  const updateProduct = await productCtrl.updateProduct(req, res);
  return res.json(updateProduct);
});

module.exports = router;
