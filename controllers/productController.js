
const Product = require("../models/productModel");
const { validationResult } = require("express-validator");


////create product///
module.exports.createProduct = async(req , res) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
        try {
            const product = await Product.create(req.body);
          return  res.status(201).json({message : "product is created sucessfully" , product})
            
        } catch (error) {
          return  res.status(401).json(error.message)
        }
    } else {
        return res.status(500).json({ errors: errors.array() })
    }
};


///get products////
module.exports.getProducts = async (req, res) => {
    try {
        const products = await Product.find()
        res.status(200).json(products)
        console.log(products)
    } catch (error) {
        console.log(error)
        res.status(500).json(error.message)
    }
  }
  
  //// get product ////
  module.exports.getProduct = async (req, res) => {
    const { id } = req.params;
    console.log(id)
    try {
        const product = await Product.findById({ _id: id })
        res.status(200).json(product)
    } catch (error) {
        console.log(error)
        res.status(500).json(error.message)
    }
  }
  
  //// delete product////
  
  module.exports.deleteProduct = async (req, res) => {
    const { id } = req.params;
    // console.log(id)
    try {
        const response = await Product.deleteOne({ _id: id })
        res.status(200).json({ message: "product deleted sucessfully", response })
    } catch (error) {
        console.log(error)
        res.status(500).json(error.message)
    }
  }
  
  
  //// update product////
  
  module.exports.updateProduct = async(req, res) => {
    const errors = validationResult(req);
    const { id } = req.params;
    const { title, description, rentPerHour } = req.body;
    try {
        if(errors.isEmpty()){
            await Product.updateOne({_id : id} , {$set : { title, description, rentPerHour}})
            res.status(201).json({message : "product  has updated sucessfuly"})
        }else{
            res.status(401).json({message : "try again!!"})
        }
  
    } catch (error) {
        res.status(500).json(errors.message)
    }
  
  
  }
  
