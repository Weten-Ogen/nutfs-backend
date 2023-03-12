const express = require('express');
const userRouter = express.Router();
const userCont = require('../Controllers/UserController')

userRouter.route('/:id')
.get(userCont.show)
.patch(userCont.updateUser)


module.exports = userRouter;
