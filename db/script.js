// const express = require("express");
// const app = express();
// const userModel = require("./models/users");

// app.get('/',function(req,res){
//     userModel.create({
//         name: "saksham",
//         age: 21,
//         username: "son.saksham",
//         password:"bhag mc"
//     })
//     .then(function(createduser){
//         res.send(createduser)
//     })
// })

// app.listen(3000);
// const express = require("express");
// const app = express();
// const userModel = require("./models/users");

// app.get('/',function(req,res){
//     userModel.find({
//         name: "saksham"
//     })
//     .then(function(createduser){
//         res.send(createduser)
//     })
// })

// app.listen(3000);

// 
// const express = require("express");
// const app = express();
// const userModel = require("./models/users");

// app.get("/",function(req,res){
//     userModel
//     .create({
//         name: "saksham",
//         age: 21,
//         username: "saksham24@gmail.com",
//         password:"sakshamm24"
//     })
//     .then(function(createduser){
//         res.send(createduser);
//     })
// })

// app.get("/allusers",function(req,res){
//     userModel
//     .find()
//     .then(function(alldata){
//         res.send(alldata);
//     })
// })

// app.get("/oneuser/:username",function(req,res){
//     userModel
//     .findOne({
//         name: req.params.username
//     })
//     .then(function(alldata){
//         res.send(alldata);
//     })
// })

// app.get("/update/:username/:newusername",function(req,res){
//     userModel
//     .findOneAndUpdate({
//         name: req.params.username
//     },{
//         name: req.params.newusername
//     },{
//         new: true
//     })
//     .then(function(updatedata){
//         res.send(updatedata)
//     })
// })

// app.get("/delete/:username",function(req,res){
//     userModel
//     .findOneAndDelete({
//         name: req.params.username
//     },{
//         new: true
//     })
//     .then(function(deletedata){
//         res.send(deletedata)
//     })
// })

// app.listen(3000);


const express = require("express");
const app = express();
const path = require('path');
const userModel = require("./models/users");
app.set('view engine','ejs');
app.use(express.static(path.join(__dirname,'public')));

app.get('/',function(req,res){
    userModel.create({
        name: req.query.name,
        email: req.query.email,
        password: req.query.password
    })
    .then(function(createduser){
        res.render('index')
    })
})
app.get('/showdata',function(req,res){
    userModel.find()
    .then(function(createduser){
        res.send(createduser)
    })
 
})
app.listen(3000);