const mongoose = require('mongoose');

const product = mongoose.Schema({
  name: {
    type: "string",
    required: true,
  },
  description: {
    type: "string",
    required: true,
  },
  price: {
    type: "number",
    required: true,
  },
  order: {
    type: "number",
    default: 0,
  },
});

module.exports = mongoose.model('Product', product);