const express=require('express');
const app=express()
const bodyParser=require('body-parser');
const {check,validationResult}=require('express-validator');

const PORT=5000;

//set the templating engine
app.set('view engine','ejs')
const urlEncodedParser=bodyParser.urlencoded({extended:false})

//navigation
app.get('',(req,res)=>{
    res.render('index')
})

app.get('/register',(req,res)=>{
    res.render('register')
})

app.post('/register',urlEncodedParser,(req,res)=>{
    res.json(req.body)
})

app.listen(PORT,(req,res)=>{
    console.log(`listening on port ${PORT}`)
})
