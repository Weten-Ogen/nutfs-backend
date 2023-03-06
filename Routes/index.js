const express = require('express');
const router = express.Router();
const PostRoute = require('../Routes/PostRoute')


router.route('/')
.get((req,res) => {
    res.json({"home":false})
})
.post(async (req,res) =>{
   
})





module.exports = router;