const express = require("express");
const { createCategory, getCategory, getCategories, updateCategory, deleteCategory } = require("../controllers/categoryController");
const categoryValidation = require("../validations/categoryValidation");
const router = express.Router();


router.post("/create-category" , createCategory , categoryValidation);
router.get("/category/:id" , getCategory);
router.get("/categories" , getCategories);
router.put("/update-category/:id" , updateCategory , categoryValidation);
router.delete("/delete-category/:id" , deleteCategory);

module.exports = router