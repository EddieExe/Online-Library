import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h1 style={{
        fontSize: "3rem",
        color: "#fff",
        marginBottom: "1rem",
        fontWeight: "bold",
        textShadow: "rgba(0, 0, 0, 1) 0px 5px 15px"
      }}>
        Welcome to the Online Library
      </h1>

      <p style={{
        fontSize: "1.5rem",
        color: "#fff",
        marginBottom: "1.5rem",
        textShadow: "rgba(0, 0, 0, 1) 0px 5px 15px"
      }}>
        Explore books by categories and find your favorite reads!
      </p>

      {/* Browse Books Button */}
      <Link to="/books" style={{ textDecoration: "none" }}>
        <button
          style={{
            background: "#3b82f6",
            color: "white",
            border: "none",
            fontSize: "large",
            padding: "12px",
            borderRadius: "8px",
            fontWeight: "bold",
            cursor: "pointer",
            transition: "0.3s ease-in-out",
            width: "13%",
            alignSelf: "center",
            outline: "none",
            display: "block",
            margin: "3rem auto",
          }}
          onMouseOver={(e) => (e.target.style.background = "#2563eb")}
          onMouseOut={(e) => (e.target.style.background = "#3b82f6")}
        >
          Browse Books
        </button>
      </Link>

    </div>
  );
}

export default HomePage;