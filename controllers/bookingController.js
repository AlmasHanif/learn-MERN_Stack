const Booking = require("../models/bookingModel");


module.exports.booking = async(req , res) => {
    try {
        const newBooking = new Booking(req.body);
        await newBooking.save()
        return res.status(200).json({message :  "your car has booked sucessfully"})
    } catch (error) {
        return  res.status(400).json({error})
    }
}