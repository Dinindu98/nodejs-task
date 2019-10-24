var express = require('express');   //A package which make easier writting code | npm install express -save

var app = express(); 

app.set('view engine', 'ejs');  //template  | npm install ejs -save   -save use because of these file are dependancy

app.get('/',function(req,res){
    // res.send('this is the home page');
    res.render('index')
});

app.get('/contact',function(req,res){
    // res.send('this is the contact page');
    res.render('contact')
});


app.get('/profile/:id',function(req,res){
    // res.send('this is profile id' + req.params.id);
    var data={age:21,name:'Dinindu'}
    res.render('profile',{person:req.params.id,data:data})
});

app.listen(5000);
 