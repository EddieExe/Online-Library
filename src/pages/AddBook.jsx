import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { BooksContext } from "../context/BooksContext";

const AddBook = () => {
  const { addBook } = useContext(BooksContext);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const navigate = useNavigate(); // Initialize navigation

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && author && category && description) {
      addBook({ title, author, category, description }); // Add book to context
      setTitle("");
      setAuthor("");
      setCategory("");
      setDescription("");
      alert("Book added successfully!");

      // Redirect user to http://localhost:5174/books
      navigate("/books");
    }
  };

  return (
    <div>
      <h1
        style={{
          textAlign: "center",
          fontSize: "2.5rem",
          color: "#fff",
          marginBottom: "1rem",
          fontWeight: "bold",
          textShadow: "rgba(0, 0, 0, 1) 0px 5px 15px",
        }}
      >
        Add a New Book
      </h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;
