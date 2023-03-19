const express = require('express');
const postRouter = express.Router();


postRouter.route('/')
.get()
.post()

postRouter.route('/:id')
.get()
.patch()
.delete()


module.exports = postRouter;