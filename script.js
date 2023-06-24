//console.log('hey1');
//console.log('hey2');
//console.log('hey3');
//setTimeout(() => {
//    console.log("hey4")
//}, 1000);
//console.log('hey5');




//const fs = require('fs');
//fs.readFile("./me.txt","utf-8",function(err,data){
  //  console.log(data)
//});
//fs.writeFile("./meme.txt","aur kya haal chal hai",function(err){
 //   if(err) console.log(err);
  //  else console.log("ban gayi aur kya!");
//});
//fs.appendFile("./meme.txt"," kya ree ", function(err){
 //   if(err) console.log(err);
 //   else console.log("hogaya kaam");
//})
// const http = require('http');
// const server = http.createServer(function(req,res){
//     res.end("bana gaya server")
// });
// server.listen(3000, function(req,res){
//   console.log("here is serever,http://localhost:3000/")
// });


// express

// const express = require('express');
// const app = express();
// app.get("/",function(req,res){
//   res.send("homepage")
// });
// app.get("/profile",function(req,res){
//   res.send("profile page!")
// })
// app.listen(3000,function(){
//   console.log("http://localhost:3000/")
// })
// const express = require('express');
// const app = express();
// const path = require('path');
// app.get("/",function(req,res){
//   res.sendFile(path.join(__dirname+"/index.html"))
// })
// app.get("/homepage",function(req,res){
//   res.send("homepage! bhosademon ke sath")w
// })
// app.get("/profile",function(req,res){
//   res.send("profile hai bhai kya taad raha hai")
// })
// app.listen(3000,function(){
//   console.log("http://localhost:3000/")
// })
// const express = require('express');
// const app = express();
// const path = require('path');
// app.get('/',function(req,res){
//   res.sendFile(path.join(__dirname,'index.html'))
// })
// app.get('/profile',function(req,res){
//   res.sendFile(path.join(__dirname,'index2.html'))
// })
// app.listen(3000,function(){
//   console.log("http://localhost:3000/")
// })
// const express = require('express');
// const app = express();
// const path = require('path');
// app.use(express.static(path.join(__dirname,'public')));
// app.get('/',function(req,res){
//   res.sendFile(path.join(__dirname,'index.html'))
// })
// app.listen(3000)


// dynamic route
// const express = require('express');
// const app = express();
// const path = require('path');
// app.get('/friends',function(req,res){
//   res.send('welcome here!')
// })

// app.get('/friends/:name',function(req,res){
//   res.send(path.join(req.params.name +" hello bhai"))
// });
// app.listen(3000,function(){
//   console.log('http://localhost:3000/friends')
// })



// ejs

// const express = require('express');
// const app = express();
// const path = require('path');
// const ejs = require('ejs');

// app.use(express.static(path.join(__dirname,'static')))
// app.set('view engine', 'ejs');

// app.get('/profile/:friendname/:add',function(req,res){
//  res.render('project',{name: req.params.friendname,
//   address: req.params.add
// })
// })

// app.listen(3000,function(){
//      console.log('http://localhost:3000/profile')
//    });

  //  const express = require('express');
  //  const app = express();
  //  const path = require('path');
  //  const ejs = require('ejs');
   
  //  app.use(express.static(path.join(__dirname,'public')))
  //  app.set('view engine', 'ejs');
   
  //  app.get('/profile/:friendname',function(req,res){
  //   res.render('project',{name: req.params.friendname})
  //  })
   
  //  app.listen(3000,function(){
  //       console.log('http://localhost:3000/profile')
  //     });





  