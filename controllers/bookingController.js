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

module.exports.getBooking = async(req , res) => {
    try {
        const booking = await Booking.find()
        res.status(200).json(booking)
        console.log(booking)
    } catch (error) {
        console.log(error)
        res.status(500).json(error.message)
    }
}

module.exports.deleteBooking = async (req, res) => {
    const { id } = req.params;
    // console.log(id)
    try {
        const response = await Booking.deleteOne({ _id: id })
        res.status(200).json({ message: "Booking deleted sucessfully", response })
    } catch (error) {
        console.log(error)
        res.status(500).json(error.message)
    }
}