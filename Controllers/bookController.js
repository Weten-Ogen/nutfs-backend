const Book = require('../Models/Book');
const Post = require('../Models/Book')

exports.index = async (req, res) => {
    const books =await Book.find();
    res.json(books);
}

exports.store = async (req,res) =>{
    await Book.create(req.body);
    res.send({data:"book added to store"})
}

exports.show = async(req,res) =>{
    const { id } = req.body;
    const book = await Book.findOne(id)
    res.json(book )

}

exports.update = async(req,res) =>{
    const { id } = req.body;
    await Book.updateOne(id , req.body)
    res.json({data: "update was sucessful"})

}
exports.delete = async(req,res) =>{
    const { id } = req.body;
    const book = await Book.deleteOne(id)
    res.json({data: `${id} was deleted`} )

}