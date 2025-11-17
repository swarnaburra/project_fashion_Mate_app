import React from "react";
import { Link } from "react-router-dom";

export default function FashionQuiz() {
  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h2>Fashion Quiz</h2>
      <p>Take this quiz to find your perfect fashion style!</p>

      {/* Link back to Home */}
      <Link 
        to="/" 
        style={{
          display: "inline-block",
          marginTop: "1rem",
          padding: "0.5rem 1rem",
          background: "#ff4081",
          color: "white",
          borderRadius: 5,
          textDecoration: "none",
        }}
      >
        ← Back to Home
      </Link>
    </div>
  );
}
