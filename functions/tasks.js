
var express = require('express');
var router = express.Router();
var models = require("../models");

module.exports={get_data,get_phone_number,compute_otp,send_message,save_otp };


function get_data(req,res){
  console.log(req.body.user_id);
    return req.body.user_id;
}
function get_phone_number(user_id){
  var x=models.User.findAll({
    attributes:['phone']
  }).then(function() {
    console.log(x);
    return 0;
  });
}

function compute_otp(){
  console.log("conputing otp");
  return 1221;
  // biswa logic
}

function send_message(phone,totp){
  // biswa logic
  console.log("sendimng ,messgae ");
  console.log(phone);
  return 0;
}


function save_otp(phone,totp){
console.log("saving in db");
  models.user_otp.create({
      MSSDIN:phone,
      otp:totp

  }).then(function(){
  console.log("saved!");
    return 0;
  });

}
