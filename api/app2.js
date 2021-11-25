var cors = require("cors");
var mongoose = require("mongoose");
var express = require("express");
var app2 = express();
var createRouter = require("./routes/reviewRoute")

app2.use(cors())
app2.use(express.json())

//connect to mongoose
//the below one is abandon, because other team member unable to access.
//mongoose.connect("mongodb+srv://admin-1:stonk@cluster0.aw3xc.mongodb.net/reviewsDB"); //this got from the mango atlas webpage...connet application step
mongoose.connect("mongodb+srv://admin-1:stonk@cluster0.yxfnm.mongodb.net/reviewsDB")
app2.use("/",createRouter); 


module.exports = app2;