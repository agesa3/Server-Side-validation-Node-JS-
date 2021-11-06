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

app.post('/register',urlEncodedParser,[
    check('username','Name is required').exists().isLength({min:3}),
    check('email','Email is required').isEmail(),
    check('password','Password is required').isLength({min:6})
],(req,res)=>{
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        // return res.status(422).json({errors:errors.array()})
        const alert=errors.array();
        res.render('register',{
            alert
        })
   
    }
    res.send('Success')
})


app.listen(PORT,(req,res)=>{
    console.log(`listening on port ${PORT}`)
})
