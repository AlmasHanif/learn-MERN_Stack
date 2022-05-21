const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const port = process.env.PORT || 5000;
const mongoConnect = require("./config/db");
const userRoute = require("./routes/userRoute")
// app.get('/', (req, res) => {
//     res.send('Hello World!')
//   })
mongoConnect();
 app.use(cors());
 app.use(express.json()); 
app.use("/",express.static(path.join(__dirname , "static")));

app.use("/api" ,userRoute )

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })