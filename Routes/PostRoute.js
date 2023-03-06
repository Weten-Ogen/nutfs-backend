const express = require('express');
const PostRoute = express.Router();
const PostController = require('../Controllers/PostController')

PostRoute.route('/post')
.get(PostController.showAll)
PostRoute.route('/:id')
.post(PostController.create)


module.exports = PostRoute;