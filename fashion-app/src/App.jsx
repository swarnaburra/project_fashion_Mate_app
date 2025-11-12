import React from "react";
import { Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import StyleLens from "./components/Style-Lens";
import "./App.css"


  function App() {
    return (
<div className="App">
  <Header />
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/stylelens" element={<StyleLens />} />
  </Routes>

  <Footer />
</div>
  );

}

export default App;