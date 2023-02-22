const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Product = require('./models/productModel')
const connection = require('./connect')

require('dotenv').config();

const app = express();
const port = process.env.Port || 5000;


// middleware
app.use(express.json())
app.use(cors())



//routing
app.get('/', (req,res) => {
    res.send("Hello world ");
})

app.get('/product',async (req,res) => {
    await connection();
    const products = await Product.find({});
    res.status(200).json(products)
})

app.post('/product', async (req,res) =>{
    await connection()
    const product = await Product.create(req.body)
    res.status(200).json(product) 
})
app.get('/product/:id', async(req,res) =>{
    await connection()
    const {id} = req.params;
    const product = await Product.findById(id);
    res.status(200).json(product)
})
app.put('/product/:id', async(req,res) =>{
    await connection()
    const {id} = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body);
    res.status(200).json(product)
})

app.listen(port, (req,res) =>{
    console.log(`Starting server on ${port}`)
})