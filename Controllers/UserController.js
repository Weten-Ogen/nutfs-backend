const bcrypt = require('bcrypt');
const User = require('../Models/User');

// Get user Documents
exports.show = async(req,res) =>{
  const id = req.params.id;
  const user = await User.findById(id)
  const time = user.createdAt
  console.log(time)

  try{
    if (user) {
      const {password, ...others} = await user._doc;
      res.status(200).json(others)
    }
    else{
      res.status(404).json("User Doesn't Exist")
    }
 }catch(e) {
  res.status(500).json(e);
  console.log(e)
  }
}

// updating profile

exports.updateUser = async(req,res) =>{
  const id = req.params.id
  const {currentUserId, currentUserAdminStatus, password} = req.body;

  // Check if the current user is the admin
  if(id === currentUserId || currentUserAdminStatus){ 
    try {
      // encrypt passworddddddd before comparing
      if (password){
        const salt = await bcrypt.genSalt(10);
        req.body.password =  await bcrypt.hash(password,salt)
      }
      const user = await User.findByIdAndUpdate(id, req.body, {new: true})
      res.status(200).json(user)
    }catch(e){
    res.status(500).json(e)
  }}
  else{
  res.status(403).json("Acess Denied");
 }
}
// Deleting a user

exports.deleteUser = async(req,res) => {
  const id = req.params.id;
  const {currentUserId, currentUserAdminStatus} = req.body;
  
  // if the user is the admin, allow deletion
  if (id === currentUserId  || currentUserAdminStatus)  {
    try{
      const user = await  User.findByIdAndDelete(id);
      res.status(200).json(`Deleted ${user.username}`)
    }catch(e){
      res.status(500).json(e)
    }
  }else{
    res.status(403).json("Access Denied");
  }

}

// follow a user
exports.followUser = async(req,res) =>{
  const id = req.params.id
  const {currentUserId} = req.body;

  if (currentUserId === id){
    res.status(403).json('Action Forbidden')
  }else{
    try {
      const followUser = User.findById(id);
      const followingUser = User.findById(currentUserId);

      if(!followUser.followers.includes(currentUserId)){
         await followerUser.updateOne({$push: {followers: currentUserId}})
         await followingUser.updateOne({$push: {following: id }})
         res.status(200).json("User followed");
      }else{
         res.status(403).json("User")
      }
    } catch(e) {
      
    }
  }
}

exports.UnfollowUser = async(req,res) => {

  
}