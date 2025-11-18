import { Link } from "react-router-dom";
import StyleLensUpload from "./StyleLensUpload";

export default function StyleLens() {
  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h2>StyleLens</h2>
      <p>Get personalized fashion tips and trends here!</p> <StyleLensUpload />

        <Link to="/"
        style={{
          display: "inline-block",
          marginTop: "1rem",
          padding: "0.5rem 1rem",
          background: "#f0c",
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
