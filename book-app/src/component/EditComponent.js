import React, { useState, useEffect } from 'react';

const EditComponent = () => {
  const [book, setBook] = useState({ title: '', quantity: '' });

  const urlParams = new URLSearchParams(window.location.search);
  const bookId = urlParams.get('id');

  useEffect(() => {
    fetch(`https://my-json-server.typicode.com/codegym-vn/mock-api-books/books/${bookId}`)
      .then(response => response.json())
      .then(data => setBook(data));
  }, [bookId]);

  const handleSaveBook = () => {
    // Gửi yêu cầu PUT để cập nhật thông tin sách
    fetch(`https://my-json-server.typicode.com/codegym-vn/mock-api-books/books/${bookId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(book)
    })
      .then(response => response.json())
      .then(data => {
        alert('Book updated successfully');
        // Điều hướng về trang Danh sách Book
        window.location.href = '/';
      });
  };

  return (
    <div>
      <h1>Edit</h1>
      <form>
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" value={book.title} onChange={e => setBook({ ...book, title: e.target.value })} required/><br/>

        <label htmlFor="quantity">Quantity:</label>
        <input type="number" id="quantity" value={book.quantity} onChange={e => setBook({ ...book, quantity: e.target.value })} required/><br/>

        <button type="button" onClick={handleSaveBook}>Save</button>
      </form>
    </div>
  );
};

export default EditComponent;