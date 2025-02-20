import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import BooksProvider from "./context/BooksContext.jsx"; // Import BooksProvider
import "./style.css"

ReactDOM.createRoot(document.getElementById("root")).render(
  <BooksProvider>
    <App />
  </BooksProvider>
);