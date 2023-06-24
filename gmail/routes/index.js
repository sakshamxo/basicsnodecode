var express = require('express');

const passport = require('passport')
var router = express.Router();
const userModel = require('./users')
const localstrategy = require('passport-local')
passport.use(new localstrategy(userModel.authenticate()));

router.get("/",function(req,res,next){
    res.render('index')
})
router.post('/register',function(req,res){
   var userdata = new userModel({
        username: req.body.username,
        name: req.body.name
    })
    userModel.register(userdata,req.body.password)
    .then(function(createduser){
        passport.authenticate('local')(req,res,function(){
            res.redirect('/profile')
        })
        
    })
    .catch(function(err){
        res.send(err)
    })
})
router.post('/login',passport.authenticate('local',{
    successRedirect: '/profile',
    failureRedirect:'/register'  
}),function(req,res){});

router.get('/logout',function(req,res){
    req.logout(function(err){
        if (err) throw err;
        res.redirect('/login')
    })
});

function isloggedIn(req,res,next){
    if (req.isAuthenticated()){
        return next();
    }
    else{
        res.redirect('/login')
    }
}
router.get('/register',function(req,res){
    res.render('register')
})
router.get('/login',function(req,res){
    res.render('login')
})
router.get('/profile',isloggedIn,function(req,res){
    userModel.findOne({username: req.session.passport.user  })
    .then(function(founduser){
        res.render('profile',{founduser});
    });
});

router.get('/alluser',function(req,res){
    userModel.find()
   .then(function(alluser){
    res.render('alluser',{alluser})
   })
})
router.get('/delete/:id',function(req,res){
    userModel.findByIdAndDelete({id:req.session.passport.object_id},{id:req.session.passport.object_id})
    .then(function(deleteduser){
        res.redirect("back")
    })
})
module.exports = router;
