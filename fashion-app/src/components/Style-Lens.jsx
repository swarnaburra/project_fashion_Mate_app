import { Link } from "react-router-dom";

export default function StyleLens() {
  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h2> StyleLens</h2>
      <p>Get personalized fashion tips and trends here!</p>

      {/* Link back to Home */}
      <Link to="/" style={{ display: "inline-block", marginTop: "1rem", padding: "0.5rem 1rem", background: "#f0c", color: "white", borderRadius: 5, textDecoration: "none" }}>
        ← Back to Home
      </Link>
    </div>
  );
}
