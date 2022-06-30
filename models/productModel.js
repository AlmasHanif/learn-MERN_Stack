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
        type: String,
        required: true
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
    ],
    packeges : [
       { 
        driver : {type : Boolean},
        AC : {type : Boolean},
        Mp3 : {type : Boolean},
        fuelType : {type : String}
    }
    ]

}, { timestamps: true })

const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;