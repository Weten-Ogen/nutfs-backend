const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    firstname: {
        required: true,
        type: String,
        maxlength:30,
    }
})


module.exports = mongoose.model('Post', PostSchema);