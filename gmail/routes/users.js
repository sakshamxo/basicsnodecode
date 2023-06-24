var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var plm = require('passport-local-mongoose');


mongoose.connect('mongodb://localhost/gmail');

var userSchema = mongoose.Schema({
  username: String,
  password:String,
  name:String
})



userSchema.plugin(plm);
module.exports = mongoose.model('user',userSchema)

module.export = router;
