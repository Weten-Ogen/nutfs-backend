const express = require('express');
const authRouter = require('./AuthRoute');
const router = express.Router();
const bookRouter = require('./bookRoute')




router.route('/').get((req,res) =>{
    res.send("This is an api endpoint")
})
router.use('/auth', authRouter)

router.use('/book',bookRouter);


router.all('/*',(req,res) =>{
    res.send("Page Not Found")
})




module.exports = router;