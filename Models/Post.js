const {Schema,SchemaTypes, model} = require('mongoose');

const PostSchema = new Schema({
    user: SchemaTypes.ObjectId,
    title: String,
    message: {type:String},
    createAt: Date,
    updateAt:Date,
    likes: [Strings],

})

module.exports = model('Post', PostSchema);