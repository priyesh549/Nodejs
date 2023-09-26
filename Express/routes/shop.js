const path = require('path')

const express = require('express');

const rootDir = require('../util/path')

const router = express.Router();

// get request only
router.get('/',(req,res,next)=>{
    res.sendFile(path.join(rootDir,'../','views','shop.html'));
})


module.exports = router;