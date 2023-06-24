const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');


app.set('view engine','ejs');

app.get('/',function(req,res){
    res.render('index')
})
app.get('/files',function(req,res){
    fs.readdir('./files/',function(err,data){
        if(err) throw err
        res.render('index2',{data})
    })
});
app.listen(3000)