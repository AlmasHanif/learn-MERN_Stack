const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema({
    car : {
        type : String ,
        
    },
    user : {
        type :String ,
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