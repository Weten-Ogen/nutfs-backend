const express = require('express');
// const cors = require('cors');
const connect = require('./database/db')

const Router = express.Router();
const app = express();
require('dotenv').config()

const port  = process.env.Port || 5000;


// middleware
app.use([express.json()])
Router.route('/').get(( req,res) => {
    res.json(req.body)
})

app.listen(port, () => {
    console.log(`Starting Server on ${port}`)
})