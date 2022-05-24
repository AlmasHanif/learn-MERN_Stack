const express = require("express");
const { register } = require("../controllers/userController");
const { registerValidations } = require("../validations/userValidation");
const router = express.Router();

router.post("/register", register , registerValidations);

module.exports = router