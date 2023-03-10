const User = require("../Models/User")


exports.register = async (req,res) => {
    const {username, password, firstname, lastname} = req.body;

    const newUser = await User.create({username, password,firstname, lastname});
    try {
        res.status(200).json(newUser)
    } catch(e) {
        res.status(500).json({message: e.message})
    }
}
exports.login = (req,res) => {
    return {

    }
}
exports.signout = (req,res) =>{
    return {

    }
}