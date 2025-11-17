import { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="logo">FashionMate</div>

      {/* Hamburger icon */}
      <div className="hamburger" onClick={toggleMenu}>
        ☰
      </div>

      {/* Navigation links */}
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li><a href="#home">Home</a></li>
        <li><a href="#stylelens">StyleLens</a></li>
        <li><a href="#questionnaire">FashionQuiz</a></li>
        <li><a href="#login">Login</a></li>
      </ul>
    </nav>
  );
}
