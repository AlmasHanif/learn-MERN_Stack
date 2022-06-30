const express = require("express");
const { createProduct, getProduct, getProducts, updateProduct, deleteProduct } = require("../controllers/productController");
const productValidation = require("../validations/productValidation");
const router = express.Router();


router.post("/create-product" , createProduct , productValidation )
router.get("/product" , getProduct);
router.get("/products" , getProducts);
router.put("/update-product" , updateProduct , productValidation);
router.delete("/delete-product" , deleteProduct);


module.exports = router;
