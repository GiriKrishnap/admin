var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/userdb");

const user = require("../controllers/usercontroller");

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('signin');
});

router.post('/', user.insertUser);

module.exports = router;
