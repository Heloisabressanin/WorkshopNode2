const Product = require("../models/product");
const Order = require("../models/order");

const successResponse = (
  data,
  status = 200,
  message = "Success, this operation is successfully"
) => {
  return {
    status,
    message,
    data,
  };
};
const failledResponse = (
  data,
  status = 400,
  message = "Sorry this operation has failled"
) => {
  return {
    status,
    message,
    data,
  };
};

// Créer un produit
const createProduct = async (data) => {
  try {
    const product = new Product(data);
    const savedProduct = await product.save();
    return successResponse(savedProduct);
  } catch (error) {
    return failledResponse(error);
  }
};

// Obtenir tous les produits
const getAllProducts = async () => {
  try {
    const products = await Product.find();
    return successResponse(products);
  } catch (error) {
    return failledResponse(error);
  }
};

// Obtenir un produit par son ID
const getOneProduct = async (id) => {
  try {
    const product = await Product.findById(id);
    return successResponse(product);
  } catch (error) {
    return failledResponse(error);
  }
};

const updateProduct = async (req) => {
  if (!req.params.id) return false;
  const updates = { ...req.body };

  try {
    const product = await Product.findByIdAndUpdate(req.params.id, updates, {
      new: true,
    });
    return successResponse(product);
  } catch (error) {
    return failledResponse(error);
  }
};

// Supprimer un produit
const deleteProduct = async (id) => {
  try {
    const deleteProduct = await Product.findByIdAndDelete(id);
    return successResponse(deleteProduct);
  } catch (error) {
    return failledResponse(error);
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

module.exports = {getAllProducts, getOneProduct};