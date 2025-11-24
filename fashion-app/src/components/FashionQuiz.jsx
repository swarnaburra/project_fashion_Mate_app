import { useState } from "react";
import { Link } from "react-router-dom";
import "./FashionQuiz.css"; 
import BackToHome from "./BackToHome";

export default function FashionQuiz() {
  const questions = [
    {
      question: "What's your preferred color palette?",
      options: ["Bright", "Neutral", "Dark"],
    },
    {
      question: "Choose a style vibe:",
      options: ["Casual", "Formal", "Chic"],
    },
    {
      question: "Pick an accessory you like:",
      options: ["Hat", "Scarf", "Statement Necklace"],
    },
  ];

  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (option) => {
    setAnswers([...answers, option]);
    if (currentQ + 1 < questions.length) {
      setCurrentQ(currentQ + 1);
    } else {
      setShowResults(true);
    }
  };

  const outfitImages = {
     Hat: [
      "/hat1.jpg",
      "/hat2.jpg",
      "/hat3.jpg",
    ],
    Scarf: [
      "/scarf1.jpg",
      "/scarf2.jpg",
      "/scarf3.jpg",
    ],
    "Statement Necklace": [
      "/necklace1.jpg",
      "/necklace2.jpg",
      "/necklace3.jpg",
    ],
    Casual: [
      "/casual1.jpg",
      "/casual2.jpg"
    ],
    Formal: [
      "/formal1.jpg",
      "/formal2.jpg"
    ],
    Chic: [
      "/chic1.jpg",
      "/chic2.jpg"
    ],
  
  };

  const recommendedOutfits = answers.flatMap((answer) => outfitImages[answer] || []);

  return (
    <div style={{ textAlign: "center", margin: "2rem" }}>
      <h2>Fashion Quiz</h2>

      {!showResults ? (
        <div>
          <p>{questions[currentQ].question}</p>
          {questions[currentQ].options.map((option, idx) => (
            <button
              key={idx}
              className="quiz-btn"
              style={{ margin: "0.5rem", padding: "0.5rem 1rem" }}
              onClick={() => handleAnswer(option)}
            >
              {option}
            </button>
          ))}
        </div>
      ) : (
        <div>
          <h3>Recommended Outfits:</h3>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            {recommendedOutfits.length > 0 ? (
            recommendedOutfits.map((img, idx) => (
              <div
                key={idx}
                style={{
                  width: 180,
                  height: 180,
                  border: "1px solid #ccc",
                  borderRadius: 8,
                  overflow:"hidden"
                }}
              >
                <img
                  src={img}
                  alt={`outfit-${idx}`}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
            ))
          ) : (
            <p> No matching outfits. </p>
          )}
          </div>
        </div>
      )}

      <BackToHome></BackToHome>
    </div>
  );
}
