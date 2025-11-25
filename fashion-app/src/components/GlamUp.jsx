import { Link } from "react-router-dom";
import "./GlamUp.css";
import BackToHome from "./BackToHome";

export default function GlamUp() {
  const images = [
    "/fashion1.jpg",
    "/fashion2.jpg",
    "/fashion3.jpg"
  ];

  return (
    <div className="glamup-container">
      <h2 className="title">GlamUp</h2>
      <p className="tagline">Get Inspired with Seasons..!</p>

      <div className="tiles">
        {images.map((img, index) => (
          <div className="tile" key={index}>
            <img src={img} alt={`fashion-${index}`} className="tile-image" />
          </div>
        ))}
      </div>

      <BackToHome></BackToHome> 

    </div>
    
  );
}