import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import './CreateBooks.css';

export default function CreateBooks() {
    let [newBook, setNewBook] = useState({
        name: '',
        description: '',
        price: ''
    })
    const handleNewBookName = (e) => {
        setNewBook({
            ...newBook,
            name: e.target.value
        });
    }
    const handleNewBookDescription = (e) => {
        setNewBook({
            ...newBook,
            description: e.target.value
        });
    }
    const handleNewBookPrice = (e) => {
        setNewBook({
            ...newBook,
            price: e.target.value
        });
    }
    const navigate = useNavigate();
    const submitNewBook = async () => {
        let books = await axios.post("http://localhost:3000/api/v1/book", newBook);
        let confirms = confirm("Create new book success!");
        if(confirms == true){
            navigate("/");
        }else{
            navigate("/");
        }
    }
    return (
        <div className="create-books-container">
            <form className="create-books-form">
                <label htmlFor="name">Book name:</label>
                <input type="text" onChange={handleNewBookName} placeholder='Book name'/>
                <label htmlFor="description">Book description:</label>
                <input type="text" onChange={handleNewBookDescription} placeholder='Book description'/>
                <label htmlFor="price">Book price:</label>
                <input type="text" onChange={handleNewBookPrice} placeholder='Book price'/>
                <button onClick={submitNewBook}>Create</button>
            </form>
        </div>
    )
}
