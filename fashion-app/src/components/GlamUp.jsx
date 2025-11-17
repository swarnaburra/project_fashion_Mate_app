import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./GlamUp.css";

export default function GlamUp() {
  const [images, setImages] = useState([null, null, null]);

  const handleUpload = (index, event) => {
    const file = event.target.files[0];
    if (file) {
      const newImages = [...images];
      newImages[index] = URL.createObjectURL(file);
      setImages(newImages);
    }
  };

  return (
    <div className="glamup-container">
      <h2>GlamUp</h2>
      <p className="tagline">Get inspired with seasons!</p>

      <div className="tiles">
        {images.map((img, idx) => (
          <div key={idx} className="tile">
            {img ? (
              <img src={img} alt={`Uploaded ${idx + 1}`} />
            ) : (
              <label className="upload-label">
                + Upload
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleUpload(idx, e)}
                  hidden
                />
              </label>
            )}
          </div>
        ))}
      </div>

      <Link to="/" className="back-button">
        ← Back to Home
      </Link>
    </div>
  );
}
