const mongoose = require('mongoose');

const connection = async() => {
    const uri = process.env.ATLAS_URI;

    mongoose.set('strictQuery',false)
    
    await mongoose.connect(uri, {useNewUrlParser: true});

    const connection = await mongoose.connection;
    
    connection.once('open',() =>{
    console.log("Mongodb database connection established successfully")
})}


module.exports = connection;




