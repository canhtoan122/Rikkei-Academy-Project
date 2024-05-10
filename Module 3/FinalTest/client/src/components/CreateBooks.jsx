import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

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
        <div>
            <label htmlFor="name">Book name:</label>< br/>
            <input type="text" onChange={handleNewBookName} placeholder='Book name'/>< br/>
            <label htmlFor="name">Book description:</label>< br/>
            <input type="text" onChange={handleNewBookDescription} placeholder='Book description'/>< br/>
            <label htmlFor="name">Book price:</label>< br/>
            <input type="text" onChange={handleNewBookPrice} placeholder='Book price'/>< br/>
            <button onClick={submitNewBook}>+</button>
        </div>
    )
}
