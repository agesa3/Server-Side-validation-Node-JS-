const express=require('express');
const app=express()
const PORT=5000;

//set the templating engine
app.set('view engine','ejs')

//navigation
app.get('',(req,res)=>{
    res.render('index')
})

app.get('/',(req,res)=>{
    res.render('register')
})

app.listen(PORT,(req,res)=>{
    console.log(`listening on port ${PORT}`)
})
