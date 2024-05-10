const express = require("express");
const BookController = require("../controllers/book.controller.js");
const bookRouter = express.Router();

bookRouter.get("/api/v1/books", (req, res) =>{
    BookController.getAllBooks(req, res);
});
// bookRouter.get("/api/v1/books/:name", (req, res) =>{
//     BookController.getBookName(req, res);
// });
bookRouter.get("/api/v1/books/:id", (req, res) =>{
    BookController.getBookId(req, res);
});
bookRouter.post("/api/v1/book", (req, res) =>{
    BookController.addBook(req, res);
});
bookRouter.post("/api/v1/author", (req, res) =>{
    BookController.addAuthor(req, res);
});
bookRouter.put("/api/v1/book/:id", (req, res) =>{
    BookController.updateBook(req, res);
});
bookRouter.delete("/api/v1/book/:id", (req, res) =>{
    BookController.deleteBook(req, res);
});
module.exports = bookRouter;