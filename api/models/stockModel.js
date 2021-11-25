
//This js file is created a Review Class so that reviewRoute.js can use this object
const mongoose = require("mongoose")

const stockSchema = {
    owner:String,
    stockName:String,
    stockShares:String
}

const Stock = mongoose.model("Stock",stockSchema); //returns a mongoose model

module.exports = Stock; //Review model is created 