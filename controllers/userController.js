const User = require("../models/userModel");
/// register api ////

module.exports.register = async(req , res) =>{
    const {name , email , password} = req.body

    try {
        
     const user = await  User.create({
            name,
            email,
            password
        })
        console.log(user)
        res.status(201).json({ msg: "your account has been created"} , user)
    } catch (error) {
        res.status(401).json(error.message)
    }
}