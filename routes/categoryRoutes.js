const express = require("express");
const { createCategory, getCategory, getCategories, updateCategory, deleteCategory } = require("../controllers/categoryController");
const categoryValidation = require("../validations/categoryValidation");
const router = express.Router();


router.post("/create-category" , createCategory , categoryValidation);
router.get("/category" , getCategory);
router.get("/categories" , getCategories);
router.put("/update-category" , updateCategory , categoryValidation);
router.delete("/delete-category" , deleteCategory);

module.exports = router