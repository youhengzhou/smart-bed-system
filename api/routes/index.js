var express = require('express');
var router = express.Router();
//npm i mongoose cors

/*
var unirest = require('unirest');

unirest.post(API_URL)
  .header("X-RapidAPI-Key", API_KEY)
  .end(function (result) {
    console.log(result.status, result.headers, result.body);
  });
  

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
