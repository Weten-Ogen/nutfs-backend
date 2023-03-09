const mongoose  = require('mongoose');


async function connect(){
  const uri =  process.env.Uri;
  mongoose.set({strictQuery:false});
  await mongoose.connect(uri, { useNewUrlParser: true }) ;
  const connection =  mongoose.connection;
  
  connection.once('open', () =>{
    console.log('successfully connected to Database');
  })

}

module.exports = connect;