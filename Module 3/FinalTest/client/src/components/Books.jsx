import React, { useEffect, useState } from 'react';
import axios from "axios";
import CreateBooks from './CreateBooks';
import { useNavigate } from 'react-router-dom';
import './Books.css';

export default function Books() {
  let [book, setBooks] = useState([]);
  useEffect(async () => {
    let books = await axios.get("http://localhost:3000/api/v1/books");
    setBooks(books.data.data);
  }, []);
  const navigate = useNavigate();
  const editBook = (id) =>{
    navigate(`/BookDetail/${id}`);
  }
  return (
    <div>
      <CreateBooks></CreateBooks>
      <table border={1} className='books-table'>
        <thead>
          <tr>
            <th>STT</th>
            <th>NAME</th>
            <th>DESCRIPTION</th>
            <th>PRICE</th>
            <th>CREATE AT</th>
            <th>UPDATE AT</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {book.map((item, index, arr) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td>{item.price}</td>
                <td>{item.create_at}</td>
                <td>{item.updated_at}</td>
                <td><button onClick={() => editBook(item.id)}>Edit</button></td>
                <td><button>Delete</button></td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
