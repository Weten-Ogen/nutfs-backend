const mongoose  = require('mongoose');


async function ConnectDb(){
  const uri = await process.env.url;
  mongoose.set({strictQuery:false});
  mongoose.connect(uri, {useNewUrlParser: true}) ;
  const connection = mongoose.connection;
  connection.once('open', () =>{
    console.log('successfully connected to Database');
  })

}
module.exports = ConnectDb;