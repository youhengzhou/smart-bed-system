
//This js file is created a Review Class so that reviewRoute.js can use this object
const mongoose = require("mongoose")

const reviewSchema = {
    title:String,
    content:String
}

const Review = mongoose.model("Review",reviewSchema); //returns a mongoose model

module.exports = Review; //Review model is created 