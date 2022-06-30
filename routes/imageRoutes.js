const express = require("express");
const router = express.Router();
const imageUpload = require("../controllers/imageUpload");
const upload = require("../utils/multer");


router.post("/imageupload", upload.any("image") , imageUpload);


module.exports = router