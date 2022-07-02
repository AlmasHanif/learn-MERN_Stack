const express = require("express");
const { booking, getBooking, deleteBooking } = require("../controllers/bookingController");
const router = express.Router();

router.post("/booking" , booking);
router.get("/bookings" , getBooking)
router.delete("/delete-booking" , deleteBooking)
module.exports = router