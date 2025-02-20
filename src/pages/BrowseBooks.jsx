import { useContext, useState } from "react";
import { BooksContext } from "../context/BooksContext";
import { Link } from "react-router-dom";
import "../style.css";

const BrowseBooks = () => {
  const { books } = useContext(BooksContext);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  // Filtered Books
  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(search.toLowerCase()) &&
    (category ? book.category === category : true)
  );

  return (
    <div className="browse-books-container">
      <h1 className="browse-books-title">Browse Books</h1>

      {/* Search & Filter Section */}
      <div className="search-filter-container">
        <input
          type="text"
          placeholder="Search books..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="category-select"
        >
          <option value="">All Categories</option>
          <option value="Fiction">Fiction</option>
          <option value="Self-Help">Self-Help</option>
          <option value="Finance">Finance</option>
          <option value="Sci-Fi">Sci-Fi</option>
          <option value="Thriller">Thriller</option>
          <option value="Business">Business</option>
          <option value="Philosophy">Philosophy</option>
          <option value="Fantasy">Fantasy</option>
          <option value="History">History</option>
          <option value="Technology">Technology</option>
        </select>
      </div>

      {/* Book List */}
      <div className="books-container">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <div key={book.id} className="book-card">
              <Link to={`/book/${book.id}`} className="book-link">
                <img src={book.image} alt={book.title} className="book-image" />
                <h3 className="book-title">{book.title}</h3>
                <p className="book-author">{book.author}</p>
              </Link>
            </div>
          ))
        ) : (
          <p className="no-books-found">No books found</p>
        )}
      </div>
    </div>
  );
};

export default BrowseBooks;