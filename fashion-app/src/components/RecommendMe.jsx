import React from "react";
import { Link } from "react-router-dom";


export default function RecommendedMe() {

  return (
    <Link to="/FashionQuiz">
      <button style={{background: 'black', color: 'white'}} type="button"> Recommend Me! </button>
    </Link>

  )
}