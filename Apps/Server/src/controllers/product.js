const Product = require("../models/product");
const Order = require("../models/order");

// Créer un produit
exports.createProduct = async (req, res) => {
  try {
    const product = new Product(req.body);
    const savedProduct = await product.save();
    res.status(201).json({ product: savedProduct });
  } catch (error) {
    res.status(400).json({ error });
  }
};

// Obtenir un produit par son ID
exports.getOneProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await Product.findOne({ _id: id });
    res.status(200).json({ product });
  } catch (error) {
    res.status(400).json({ error });
  }
};

// Obtenir tous les produits
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json({ products });
  } catch (error) {
    res.status(400).json({ error });
  }
};

// Mettre à jour un produit
exports.updateProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const updates = req.body;
    const product = await Product.findByIdAndUpdate(id, updates, { new: true });
    res.status(200).json({ product });
  } catch (error) {
    res.status(400).json({ error });
  }
};

// Supprimer un produit
exports.deleteProduct = async (req, res) => {
  try {
    const id = req.params.id;
    await Product.findByIdAndDelete(id);
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ error });
  }
};

exports.orderProduct = async (productId, userId, orderDate, price) => {
  try {
    const order = new Order({
      product: productId,
      user: userId,
      orderDate: orderDate,
      price: price,
    });

    await order.save();
    console.log("Order added successfully:", order);
  } catch (error) {
    console.error("Error adding order:", error);
  }
};
