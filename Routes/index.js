const express = require('express');
const router = express.Router();
const bookRouter = require('./bookRoute')


router.route('/').get((req,res) =>{
    res.send("This is an api endpoint")
})

router.use('/book',bookRouter);


router.all('/*',(req,res) =>{
    res.send("Page Not Found")
})




module.exports = router;