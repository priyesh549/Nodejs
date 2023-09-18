const http = require('http');
const bodyParser = require('body-parser')

const express = require('express');

const app = express();

// app.use('/',(req,res,next)=>{
//     // req,res are same with extra features
//     // next is a function is passing with use argument
//     console.log("In the middleware")
//     next(); // it allows next middleware to be called if we don't call it then no next middleware execution.
// })

// app.use((req,res,next)=>{
//     // req,res are same with extra features
//     // next is a function is passing with use argument
//     console.log("In the other middleware")
//     res.send('<h1>Hello from express</h1>')
//     // res.send({key1: 100})
// })


// body-parser

app.use(bodyParser.urlencoded({extended: true}))

// routings

app.use('/',(req,res,next)=>{
    // console.log('This always works')
    next();
})

app.use('/add-product',(req,res,next)=>{
    // console.log('In the middleware!')
    res.send('<form action="/product" method="POST"><input type="text" name="title"/><input type="number" name="size"/><button type="submit">Add Product</button></form>');
})

app.use('/product',(req,res,next)=>{
    console.log(req.body)
    res.redirect('/');
})

// get request only
app.use('/',(req,res,next)=>{
    // console.log('In the middleware!')
    res.send("<h1>Hello from Express!</h1>")
})

app.listen(3000)