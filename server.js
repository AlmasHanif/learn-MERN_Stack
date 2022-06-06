const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const port = process.env.PORT || 5000;
const mongoConnect = require("./config/db");
const userRoute = require("./routes/userRoute")

/// mongo connect//
mongoConnect();

 app.use(cors());
 app.use(express.json()); 
app.use("/",express.static(path.join(__dirname , "static")));

///user route//
app.use("/api" ,userRoute )

/////// image upload using multer////
// const multer = require("multer");
// const storage = multer.diskStorage({
//   destination : (req , file , cb) =>{
//     cb(null , "images")
//   },
//   filename : (req , file , cb) =>{
//     console.log(file)
//     cb(null , Date.now + path.extname(file.originalname))
//   }
  
// })
// const upload = multer({storage : storage})


// app.post("/upload" , upload.single("image") , (req , res) =>{
//   res.send("image uploaded")
//   // const file = req.body("image")
//   // console.log(file , "file.....")
// })
// app.get("/upload" , (req, res) =>{
//   res.render("upload")
// })

///////

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })