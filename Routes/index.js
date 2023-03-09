const express = require('express');
const router = express.Router();
const bookRouter = require('./bookRoute')


router.route('/').get(
    (req,res) =>{
        res.send("this is an api endpoint")
    }
)

router.use('/book',bookRouter);


router.all('/*',(req,res) =>{
    res.json({"unsucess": true})
})




module.exports = router;