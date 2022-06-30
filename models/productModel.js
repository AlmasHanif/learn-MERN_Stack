const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
    },
    imagePath : {
        type : String
    },
    rentPerHour: {
        type: Number,
        required: true
    },
    timeSlot: [
     {
        from : {type : String , required : true},
        to : {type : String , required : true}

     },
    ]

}, { timestamps: true })

const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;