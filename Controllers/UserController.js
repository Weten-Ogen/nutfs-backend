const User = require('../Models/User');

exports.show = async(req,res) =>{
  const id = req.params.id;
  const user = await User.findById(id)
  const {password, ...others} = user._doc;
  try {
   res.status(200).json(others)
  } catch(error) {
  res.status(400).json("User Doesnt exist")
  console.log(error)
  }
}

exports.updateUser = async(req,res) =>{
    const id = req.params.id
    const {currentUserId, currentUserAdminStatus, password} = req.body;
    if (id === currentUserId || currentUserAdminStatus){
        try{
        const user = await User.findByIdAndUpdate(id, req.body, {new: true})
         res.status(200).json(user)
        }
        catch (e) {
          res.status(500).json(e)
        }
    }
}