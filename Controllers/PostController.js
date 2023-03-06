const express = require('express');
const Post = require('../Models/Post')

exports.create= (req,res) =>{
    const post = req.body;
    const newPost = Post.create(post);
    res.json(newPost)
}

exports.showSingle =async (req, res) => {
    const {id} = req.body
    const single = Post.findById(id);
    res.json(single)
}

exports.showAll = async(req,res) => {
    const posts = Post.find({})
    res.json(posts)
}