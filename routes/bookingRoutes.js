const express = require("express");
const { booking, getBooking } = require("../controllers/bookingController");
const router = express.Router();

router.post("/booking" , booking);
router.get("/bookings" , getBooking)

module.exports = router