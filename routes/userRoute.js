const express = require("express");
const { register, login, getUsers, getUser, deleteUser, updateUser } = require("../controllers/userController");
const { registerValidations, loginValidations } = require("../validations/userValidation");
const router = express.Router();

router.post("/register", register , registerValidations);
router.post("/login" , login , loginValidations);
router.get("/allUsers" , getUsers);
router.get("/user/:id" , getUser);
router.delete("/deleteUser/:id" , deleteUser);
router.put("/updateUser/:id" , updateUser)
module.exports = router;