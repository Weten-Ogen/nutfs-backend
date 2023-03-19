const User = require("../Models/User")
const bcrypt = require("bcrypt")



exports.register = async (req,res) => {
    const {username, password, firstname, lastname} = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashPass = await bcrypt.hash(password, salt);
    const newUser = await User.create({username, password:hashPass,firstname, lastname});
    try {
        res.status(200).json(newUser)
    } catch(e) {
        res.status(500).json({message: e.message})
    }
}
exports.login = async (req,res) => {
    const {username, password} = req.body;
        const user = await User.findOne({username: username})
        if (user) {
            const validity = await bcrypt.compare(password, user.password)
        validity?res.status(200).json(user) :res.status(400).json("wrong password")
        }else{
            res.status(400).json("User doesn't exist")
        }
}
