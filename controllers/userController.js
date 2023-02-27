const ConnectDb = require("../database/db")

exports.index = async (req,res) =>{
    const db = await ConnectDb();
   
    res.json(users);
}

exports.show = async(req,res) => {
    const db = await ConnectDb();
    const user = await db.User.find

}