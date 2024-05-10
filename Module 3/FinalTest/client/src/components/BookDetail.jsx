import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";

export default function BookDetail() {
    const { id } = useParams();
    const [book, setBook] = useState([]);

    useEffect(() => {
        const fetchBook = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/api/v1/books/${id}`);
                setBook(response.data.data[0]);
            } catch (error) {
                console.error("Error fetching book details:", error);
            }
        };

        fetchBook();
    }, []);
    return (
        <div>
            {book ? (
                <div>
                    <h2>Book Detail</h2>
                    <p><strong>Name:</strong> {book.name}</p>
                    <p><strong>Description:</strong> {book.description}</p>
                    <p><strong>Price:</strong> {book.price}</p>
                    <p><strong>Created At:</strong> {book.create_at}</p>
                    <p><strong>Updated At:</strong> {book.updated_at}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}
