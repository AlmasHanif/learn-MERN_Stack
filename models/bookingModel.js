const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema({
    car : {
        type : mongoose.Schema.Types.ObjectId ,
        ref : "Product"
    },
    user : {
        type : mongoose.Schema.Types.ObjectId ,
        ref : "User"
    },
    bookedTimeSlot : [
        {
            from : {type : String} ,
            to : {type : String}
        }
    ],
    totalHours : {
        type : Number
    },
    totalAmount : {
        type : Number
    }
}, {timestamps : true});

const Booking = mongoose.model("Booking" , BookingSchema);
module.exports = Booking;