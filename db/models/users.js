// var mongoose = require('mongoose');
// mongoose.connect("mongodb://localhost/dbname");
// var userSchema = mongoose.Schema({
//     name: String,
//     age: Number,
//     username: String,
//     password:String
// })

// module.exports = mongoose.model('user',userSchema);

const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/data");

var userSchema = mongoose.Schema({
    name: String,
    username: String,
    password: String
})

module.exports = mongoose.model("user",userSchema);