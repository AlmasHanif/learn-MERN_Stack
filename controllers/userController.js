const User = require("../models/userModel");
const {validationResult} = require("express-validator");
/// register api ////

module.exports.register = async(req , res) =>{

    const errors = validationResult(req);
    if(errors.isEmpty()){
        const {name , email , password} = req.body
        const emailExist = await User.findOne({email})
        try {
            if (!emailExist) {
                const user = await  User.create({
                             name,
                             email,
                             password
                         })
                         console.log(user)
                    //  res.status(201).json(user)
                     return res.status(201).json({ msg: "your account has been created", user })
            } else {

                return res.status(401).json({ errors: [{ msg: `${email} is already taken` }] })
            }
        } catch (errors) {
            console.log(errors.message)
            return res.status(500).json()
        }

    }else{
         //validation failed
         return res.status(400).json({ errors: errors.array() })
    }
}