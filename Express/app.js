const http = require('http');

const express = require('express');

const app = express();

app.use((req,res,next)=>{
    // req,res are same with extra features
    // next is a function is passing with use argument
    console.log("In the middleware")
    next(); // it allows next middleware to be called if we don't call it then no next middleware execution.
})

app.use((req,res,next)=>{
    // req,res are same with extra features
    // next is a function is passing with use argument
    console.log("In the other middleware")
    res.send('<h1>Hello from express</h1>')
    // res.send({key1: 100})
})

app.listen(3000)