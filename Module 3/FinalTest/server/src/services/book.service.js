const database = require("../configs/db.config.js");
require("dotenv").config();

async function getAllBooks() {
    const query = `SELECT * FROM books;`;
    let result = await database.execute(query);
    return result[0];
}
async function getBookId(id) {
    const query = `SELECT * FROM books WHERE id = '${id}';`;
    let result = await database.execute(query);
    return result[0];
}
async function addBook( name, description, price) {
    let tempName = name.split('');
    let tempDescription = description.split('');
    if(name == '' || description == '' || price == ''){
        return "Book cannot be null.";
    }else if(tempName.length >= 49){
        return "Book name cannot over 50 letter.";
    }else if(tempDescription.length >= 199){
        return "Book description cannot over 200 letter.";
    }else{
        const query = `INSERT INTO books (name, description, price, create_at, updated_at) 
        VALUES ('${name}', '${description}', '${price}', NOW(), NOW());`;
        let result = await database.execute(query);
        const query2 = `INSERT INTO book_author (book_id, author_id) 
        VALUES ('${result[0].insertId}', NULL);`;
        let result2 = await database.execute(query2);
        if(result && result2){
            return "Create Success";
        }else{
            return false;
        }
    }
}
async function addAuthor( name, biography) {
    let tempName = name.split('');
    if(name == '' || biography == ''){
        return "Book cannot be null.";
    }else{
        const query = `INSERT INTO books (name, biography) 
        VALUES ('${name}', '${biography}');`;
        let result = await database.execute(query);
        const query2 = `UPDATE book_author
        SET author_id = '${result[0].insertId}'
        WHERE id = ${id};`;
        let result2 = await database.execute(query2);
        if(result && result2){
            return "Create Success";
        }else{
            return false;
        }
    }
}
async function updateBook(id, name, description, price) {
    let tempName = name.split('');
    let tempDescription = description.split('');
    let tempId = parseInt(id);
    if(name == '' || description == '' || price == ''){
        return "Book cannot be null.";
    }else if(tempName.length >= 49){
        return "Book name cannot over 50 letter.";
    }else if(tempDescription.length >= 199){
        return "Book description cannot over 200 letter.";
    }else if(!Number.isInteger(tempId)){
        return "The id is not a interger.";
    }else{
        const query = `UPDATE books
        SET name = '${name}', description= '${description}', price= '${price}', updated_at= NOW()
        WHERE id = ${id};`;
        let result = await database.execute(query);
        if(result){
            return "Update Success";
        }else{
            return false;
        }
    }
}
async function deleteBook(id) {
    let tempId = parseInt(id);
    if(!Number.isInteger(tempId)){
        return "The id is not a interger.";
    }else{
        const query = `DELETE FROM books WHERE id = ${id};`;
        let result = await database.execute(query);
        if(result){
            return "Delete Success";
        }else{
            return false;
        }
    }
}
module.exports = {
    getAllBooks,
    getBookId,
    addBook,
    updateBook,
    deleteBook
}