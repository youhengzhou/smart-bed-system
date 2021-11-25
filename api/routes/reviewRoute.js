//we use this router in app.js backend
const express = require("express");
const router = express.Router();
const Review = require("../models/reviewModel");

//configure the route to send or get data from the DB

//'http://localhost:3001/create' this is where we Post in the front end with axios
//how do we know that this create is 3001/create but not 9000 create....
router.route("/create").post((req,res)=>{
    const title = req.body.title;
    const content = req.body.content;
    const newReview = new Review({
        title,
        content
    });
    console.log("backend review reached")
    newReview.save() //save is mongoose method, to update the database.
})

router.route('/reviews').get((req,res)=>{
    Review.find() //Review.find() go look for the database.
        .then(foundReview => res.json(foundReview))
})

module.exports = router;