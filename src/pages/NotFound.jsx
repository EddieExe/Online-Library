import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h1
        style={{
          fontSize: "2.5rem",
          color: "#fff",
          textShadow: "rgba(0, 0, 0, 1) 0px 5px 15px",
        }}
      >
        404 - Page Not Found
      </h1>
      <p
        style={{
          fontSize: "1.5rem",
          color: "#fff",
          textShadow: "rgba(0, 0, 0, 1) 0px 5px 15px",
        }}>Oops! The page you are looking for does not exist.</p>

      <Link to="/" className="back-to-home">
        Go Back to Home
      </Link>
    </div>
  );
}

export default NotFound;