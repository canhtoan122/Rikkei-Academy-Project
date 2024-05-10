import React from 'react'

export default function EditBook() {
    useEffect(async () => {
        let books = await axios.get("http://localhost:3000/api/v1/books");
        setBooks(books.data.data);
    }, []);
    return (
        <div>

        </div>
    )
}
