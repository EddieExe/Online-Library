import "../style.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ padding: "1rem", background: "#eee" }}>
      <h2>Online Library</h2>
      <ul style={{ listStyle: "none", display: "flex", gap: "1rem" }}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/books">Browse Books</Link></li>
        <li><Link to="/add-book">Add Book</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
