const http = require('http');
const bodyParser = require('body-parser')

const express = require('express');

const app = express();

const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop');
const path = require('path');
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
app.use('/admin',adminRoutes);
app.use(shopRoutes);


// errors
app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'./','views','404.html'));
})

app.listen(3000)