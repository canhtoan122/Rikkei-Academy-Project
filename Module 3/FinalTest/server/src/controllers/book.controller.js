const bookService = require("../services/book.service.js");

async function getAllBooks (req, res){
    const book = await bookService.getAllBooks();
    console.log(book);
    res.status(200).json({
        data: book
    })

}
async function getBookName (req, res){
    const { name, description, price, create_at, updated_at } = req.body;
    // const user = await authService.login(username, password);
    // console.log(user);
    // res.status(200).json({
    //     data: user
    // })

}
async function getBookId (req, res){
    const book = await bookService.getBookId( req.params.id);
    res.status(200).json({
        data: book
    })
}
async function addBook (req, res){
    const { name, description, price } = req.body;
    const book = await bookService.addBook( name, description, price);
    res.status(200).json({
        data: book
    })
}
async function addAuthor (req, res){
    const { name, biography } = req.body;
    const author = await bookService.addAuthor( name, biography);
    console.log(author);
    res.status(200).json({
        data: author
    })
}
async function updateBook (req, res){
    const { name, description, price } = req.body;
    let id = req.params.id;
    const user = await bookService.updateBook( id, name, description, price );
    res.status(200).json({
        data: user
    })
    
}
async function deleteBook (req, res){
    let id = req.params.id;
    const user = await bookService.deleteBook( id );
    console.log(user);
    res.status(200).json({
        data: user
    })
    
}
module.exports = {
    getAllBooks,
    getBookName,
    getBookId,
    addBook,
    addAuthor,
    updateBook,
    deleteBook
}