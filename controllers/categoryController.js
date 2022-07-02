const Category = require("../models/categoryModel");
const { validationResult } = require("express-validator");


////craete category///
module.exports.createCategory = async(req , res) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
        try {
            const category = await Category.create(req.body);
          return  res.status(201).json({message : "category is created sucessfully" , category})
            
        } catch (error) {
          return  res.status(401).json(error.message)
        }
    } else {
        return res.status(500).json({ errors: errors.array() })
    }
};


////get categories////
module.exports.getCategories = async (req, res) => {
  try {
      const categories = await Category.find()
      res.status(200).json(categories)
      console.log(categories)
  } catch (error) {
      console.log(error)
      res.status(500).json(error.message)
  }
}

//// get category ////
module.exports.getCategory = async (req, res) => {
  const { id } = req.params;
  console.log(id)
  try {
      const category = await Category.findById({ _id: id })
      res.status(200).json(category)
  } catch (error) {
      console.log(error)
      res.status(500).json(error.message)
  }
}

//// delete category////

module.exports.deleteCategory = async (req, res) => {
  const { id } = req.params;
  // console.log(id)
  try {
      const response = await Category.deleteOne({ _id: id })
      res.status(200).json({ message: "category deleted sucessfully", response })
  } catch (error) {
      console.log(error)
      res.status(500).json(error.message)
  }
}


//// update Category////

module.exports.updateCategory = async(req, res) => {
  const errors = validationResult(req);
  const { id } = req.params;
  const { name } = req.body;
  try {
      if(errors.isEmpty()){
          await Category.updateOne({_id : id} , {$set : { name}})
          res.status(201).json({message : "category  has updated sucessfuly"})
      }else{
          res.status(401).json({message : "try again!!"})
      }

  } catch (error) {
      res.status(500).json(errors.message)
  }


}
