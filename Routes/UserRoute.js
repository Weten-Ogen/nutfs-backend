const express = require('express');
const userRouter = express.Router();
const userCont = require('../Controllers/UserController')

userRouter.route('/:id')
.get(userCont.show)
.put(userCont.updateUser)
.delete(userCont.deleteUser)

userRouter.route('/:id/follow')
.put(userCont.followUser)





module.exports = userRouter;
