/*
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.send('API is working properly');
});

//the router needs to be exported in order for Express to idenify the ports


module.exports = router;
*/

//this file defines a callback/middleware function

var express = require('express'); 
var app = express.Router(); //.Router() returns an Router object

app.get('/', function(req, res,next) { //app.get handles get requset
  res.send('Backend is working'); //testing back end is working
  //respond "backend is working when a GET request is made to the homepage"
});

let port = process.env.PORT;
if(port == null || port == "") {
 port = 9000;
}
module.exports = app

/*
app.listen(port, function() {
 console.log("Server started successfully");
});
*/

