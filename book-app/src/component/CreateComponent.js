import React, { useState } from 'react';

const CreateComponent = () => {
  const [title, setTitle] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleAddBook = () => {
    // Gửi yêu cầu POST để thêm sách mới
    fetch('https://my-json-server.typicode.com/codegym-vn/mock-api-books/books', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ title, quantity })
    })
      .then(response => response.json())
      .then(data => {
        alert('Book added successfully');
        // Điều hướng về trang Danh sách Book
        window.location.href = '/';
      });
  };

  return (
    <div>
      <h1>Add a new Book</h1>
      <form>
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" value={title} onChange={e => setTitle(e.target.value)} required/><br/>

        <label htmlFor="quantity">Quantity:</label>
        <input type="number" id="quantity" value={quantity} onChange={e => setQuantity(e.target.value)} required/><br/>

        <button type="button" onClick={handleAddBook}>Add</button>
      </form>
    </div>
  );
};

export default CreateComponent;