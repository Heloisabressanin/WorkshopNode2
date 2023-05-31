const express = require('express');
const router = express.Router();

const productCtrl = require("../controllers/product")


// routes
router.post('/',  productCtrl.createProduct);
router.get('/:id', productCtrl.getOneProduct);
router.get('/', productCtrl.getAllProducts);
router.delete('/:id', productCtrl.deleteProduct);
router.put('/:id', productCtrl.updateProduct);

module.exports = router;