var express = require('express');
var router = express.Router();
var models = require("../models");
var tasks = require("../functions/tasks");

/* GET users listing. */
// router.get('/', function(req, res, next) {
//
//   console.log(models.findAll());
//   res.send('respond with a resource');
// });

router.get('/', function(req, res) {
  console.log("getting in");
  var user_id=tasks.get_data(req,res);
  var phone=tasks.get_phone_number(user_id);
  var totp = tasks.compute_otp();
  var send_message = tasks.send_message(phone,totp);
  tasks.save_otp(phone,totp);

  // tasks.save_otp(phone,totp);
  console.log("DOne ");
  return 1;
  // return cotrol

});

module.exports = router;
