//jshint esversion:6
const express = require("express");
const bodyparser = require("body-parser");
const ejs = require("ejs");
const mongose = require("mongoose");
const app = express();
app.use(express.static("public"));
app.set('view engine','ejs');
app.use(bodyparser.urlencoded({extended:true}));

mongose.connect("mongodb://localhost:27017/userDB");

const userSchema = {
    email: String,
    pasword: String
};

const user =  new mongose.model("user", userSchema);

app.get('/',function(req,res){
    res.render("home");
});

app.get('/login',function(req,res){
    console.log(req.body.username);
    console.log(req.body.password);
    res.render("login");
    
});
app.get('/register',function(req,res){
    res.render("register");
});

app.listen(3000,function(){
    console.log('funcionando en el puerto 3000');
})