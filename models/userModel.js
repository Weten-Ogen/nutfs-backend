const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    name: {
        type:String,
        required:[true, 'Provide a valid name']
    },
    password: {
        type:String,
        required:[true, "you didnt add a password"]
    }
});

const User = mongoose.model('User', UserSchema);
module.exports = User;