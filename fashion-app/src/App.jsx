import React from "react";
import { Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import StyleLens from "./components/StyleLens";
import FashionQuiz from "./components/FashionQuiz";
import GlamUp from "./components/GlamUp";
import "./App.css"


  function App() {
    return (
<div className="App">
  <Header />
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/stylelens" element={<StyleLens />} />
    <Route path="/fashionquiz" element={<FashionQuiz />} />
    <Route path="/glamup" element={<GlamUp />} />
  </Routes>

  <Footer />
</div>
  );

}

export default App;