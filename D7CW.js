import React, { useState, useEffect } from 'react';

function D7CW() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('https://www.googleapis.com/books/v1/volumes?q=javascript')
      .then(response => response.json())
      .then(data => {
        const booksData = data.items.map(item => {
          const book = item.volumeInfo;
          return {
            id: item.id,
            title: book.title,
            authors: book.authors,
            image: book.imageLinks?.thumbnail
          };
        });
        setBooks(booksData);
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>Book List</h1>
      <ul>
        {books.map(book => (
          <li key={book.id}>
            <img src={book.image} alt={book.title} />
            <div>
              <h2>{book.title}</h2>
              <p>by {book.authors?.join(', ')}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default D7CW;