const express = require("express");
const { booking } = require("../controllers/bookingController");
const router = express.Router();

router.post("/booking" , booking);

module.exports = router