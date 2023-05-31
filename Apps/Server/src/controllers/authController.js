const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Order = require("../models/order");


// creer un compte user
const register = async (req, res, next) => {
  const { email, password } = req.body;
  const hashedPass = await bcrypt.hash(req.body.password, 5);
  try {
    const oldUser = await User.findOne({ email });
    if (oldUser) {
      return res.json({ error: "User already exists" });
    }
    let user = new User({
      email: req.body.email,
      password: hashedPass,
    });
    await user.save();

    let token = jwt.sign({ email: user.email }, "AQWXCV.321", {
      expiresIn: "1h",
    });
    return res.status(201).json({ status: "ok", data: token });
  } catch (err) {
    console.log(err);
    return res.json({
      message: "Error saving user",
    });
  }
};


// se connecter
const login = async (req, res, next) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    

    const user = await User.findOne({ email });
    if (user) {
      const result = await bcrypt.compare(password, user.password);
      if (result) {
        let token = jwt.sign({ email: user.email }, "AQWXCV.321", {
          expiresIn: "1h",
        });
        return res.status(201).json({ status: "ok", data: token});
      } else {
        return res
          .status(401)
          .json({ status: "error", error: "Invalid Password" });
      }
    } else {
      return res.status(404).json({ status: "error", error: "User not found" });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ status: "error", error: "Internal Server Error" });
  }
};


module.exports = { register, login};
