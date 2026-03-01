import { useState } from "react";

function Assignment4() {
  const [books, setBooks] = useState([
    { id: 1, title: "React Basics" },
    { id: 2, title: "JavaScript Advanced" }
  ]);

  const deleteBook = (id) => {
    const filtered = books.filter(book => book.id !== id);
    setBooks([...filtered]);
  };

  return (
    <div>
      <h1>Assignment 4 - Book List</h1>
      <h3>Total Books: {books.length}</h3>

      {books.map(book => (
        <div key={book.id}>
          <p>{book.title}</p>
          <button onClick={() => deleteBook(book.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default Assignment4;