const express = require("express");
const router = express.Router();

const authController = require("../controllers/authController");
const { authenticateToken } = require("../middleware/auth");
const productCtrl = require("../controllers/product");

// POST
router.post("/register", authController.register);
router.post("/login", authController.login);
router.post("/order",authenticateToken, productCtrl.orderProduct);


module.exports = router;
