import { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { BooksContext } from "../context/BooksContext";

const BookDetails = () => {
  const { books } = useContext(BooksContext);
  const { id } = useParams();
  const navigate = useNavigate();

  const book = books.find((b) => b.id === parseInt(id));

  if (!book) {
    return <h2 style={{ textAlign: "center", color: "white" }}>Book Not Found</h2>;
  }

  return (
    <div className="book-details-container">
      <div className="book-image-container">
        <img src={book.image} alt={book.title} className="book-image" />
      </div>
      <div className="book-info">
        <h2 className="book-title">{book.title}</h2>
        <p className="book-author"><strong>Author:</strong> {book.author}</p>
        <p className="book-description">{book.description}</p>
        <p className="book-category"><strong>Category:</strong> {book.category}</p>

        {/* Back Button */}
        <button className="back-button" onClick={() => navigate(-1)}>Back to Browse</button>
      </div>
    </div>
  );
};

export default BookDetails;