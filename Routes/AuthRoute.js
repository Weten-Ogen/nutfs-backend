const express = require('express');
const authRouter = express.Router();
const auth = require('../Controllers/AuthController');

authRouter.route('/register')
.post(auth.register)
authRouter.route('/login')
.post(auth.login)


authRouter.route('/:id')
.get()
.patch()
.delete()


module.exports = authRouter;



