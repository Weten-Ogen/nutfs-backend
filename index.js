const express = require('express');
const  app = express();
const routes = require('./Routes/index');
const cors = require('cors');
const connect = require('./Database/db')




// Config 
require('dotenv').config();




// Middleware 
app.use([express.json(),cors()])
const port = process.env.Port || 5000;

// Routes
app.use(routes)




connect().then(() => {
    app.listen(port,() =>{
   
        console.log(`Server is running on ${port}`)
    })
})

