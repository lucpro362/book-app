import React, { useState, useEffect } from 'react';

const IndexComponent = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('https://my-json-server.typicode.com/codegym-vn/mock-api-books/books')
      .then(response => response.json())
      .then(data => setBooks(data));
  }, []);

  const handleAddNewBook = () => {
    // Điều hướng người dùng sang trang Tạo mới
    window.location.href = '/create';
  };

  const handleEditBook = (bookId) => {
    // Điều hướng người dùng sang trang Chỉnh sửa Post
    window.location.href = `/edit?id=${bookId}`;
  };

  const handleDeleteBook = (bookId) => {
    // Gọi API với method DELETE để xóa sách
    fetch(`https://my-json-server.typicode.com/codegym-vn/mock-api-books/books/${bookId}`, {
      method: 'DELETE'
    })
      .then(response => {
        if (response.ok) {
          alert('Delete successful');
          // Refresh lại trang sau khi xóa thành công
          window.location.reload();
        } else {
          alert('Delete failed');
        }
      });
  };

  return (
    <div>
      <h1>Library</h1>
      <button onClick={handleAddNewBook}>Add a new Book</button>
      <div>
        {books.map(book => (
          <div key={book.id}>
            <h3>Title: {book.title}</h3>
            <p>Quantity: {book.quantity}</p>
            <button onClick={() => handleEditBook(book.id)}>Edit</button>
            <button onClick={() => handleDeleteBook(book.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IndexComponent;