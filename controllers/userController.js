const User = require("../models/userModel");
const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
/// register api ////

module.exports.register = async (req, res) => {

    const errors = validationResult(req);
    if (errors.isEmpty()) {
        const { name, email, password } = req.body
        const emailExist = await User.findOne({ email })
        try {
            if (!emailExist) {
                const hashed = await bcrypt.hash(password, 10)
                const user = await User.create({
                    name,
                    email,
                    password: hashed
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

    } else {
        //validation failed
        return res.status(400).json({ errors: errors.array() })
    }
}


//// login api////

module.exports.login = async (req, res) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
        const { email, password } = req.body;

        try {
            const login = await User.findOne({ email })
            if (!login) {
                return res.status(401).json({ errors: [{ msg: "email is not found" }] })

            }
            else {
                return res.status(201).json({ msg: "login successfully" })

            }
        } catch (error) {
            console.log(error.message)
        }
    } else {
        return res.status(400).json({ errors: errors.array() })

    }

}

/////all users /////

module.exports.getUsers = async (req, res) => {
    try {
        const users = await User.find()
        res.status(200).json(users)
        console.log(users)
    } catch (error) {
        console.log(error)
        res.status(500).json(error.message)
    }
}

//// get user ////
module.exports.getUser = async (req, res) => {
    const { id } = req.params;
    console.log(id)
    try {
        const user = await User.findById({ _id: id })
        res.status(200).json(user)
    } catch (error) {
        console.log(error)
        res.status(500).json(error.message)
    }
}

//// delete user////

module.exports.deleteUser = async (req, res) => {
    const { id } = req.params;
    // console.log(id)
    try {
        const response = await User.deleteOne({ _id: id })
        res.status(200).json({ message: "user deleted sucessfully", response })
    } catch (error) {
        console.log(error)
        res.status(500).json(error.message)
    }
}


//// update user////

module.exports.updateUser = async(req, res) => {
    const errors = validationResult(req);
    const { id } = req.params;
    const { name, email, password } = req.body;
    try {
        if(errors.isEmpty()){
            await User.updateOne({_id : id} , {$set : { name, email, password}})
            res.status(201).json({message : "user account has updated sucessfuly"})
        }else{
            res.status(401).json({message : "try again!!"})
        }

    } catch (error) {
        res.status(500).json(errors.message)
    }


}
