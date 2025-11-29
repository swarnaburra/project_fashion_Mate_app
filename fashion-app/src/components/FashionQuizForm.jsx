export default function FashionQuizForm({ answers, onChange }) {
    return (
        <><div>
            <h3>1. Choose your preferred Style</h3>
            <div className="quiz-grid">
                <div
                    className={`quiz-tile ${answers.style === "Casual" ? "selected" : ""}`}
                    onClick={() => onChange("style", "Casual")}>
                    <img src="/casual.jpg" alt="Casual Style" />
                    <p> Casual </p>
                </div>
                <div
                    className={`quiz-tile ${answers.style === "Business" ? "selected" : ""}`}
                    onClick={() => onChange("style", "Business")}>
                    <img src="business.jpg" alt="Business Style" />
                    <p> Business </p>
                </div>

                <div
                    className={`quiz-tile ${answers.style === "Trendy" ? "selected" : ""}`}
                    onClick={() => onChange("style", "Trendy")}>
                    <img src="trendy.jpg" alt="Trendy Style" />
                    <p> Trendy </p>
                </div>

                <div
                    className={`quiz-title ${answers.style === "Chic" ? "selected" : ""}`}
                    onClick={() => onChange("style", "Chic")}>
                    <img src="chic.jpg" alt="Chic Style" />
                    <p> Chic Style </p>
                </div>
            </div>
        </div><h3>2. Choose your favorite fashion color </h3><div className="quiz-grid">
                <div
                    className={`quiz-tile ${answers.color === "Black" ? "selected" : ""}`}
                    onClick={() => onChange("color", "Black")}>
                    <img src="black.jpg" alt="Black Color" />
                    <p> Black </p>
                </div>

                <div
                    class name={`quiz-tile ${answers.color === "Beige" ? "selected" : ""}`}
                    onClick={() => onChange("color", "Beige")}>
                    <img src="beige.jpg" alt="Beige Color" />
                    <p> Beige </p>
                </div>

                <div 
                className={`quiz-tile ${answers.color === "Bright Colors" ? "selected" : ""}`}
                onClick={() => onChange("color", "bright")}>
                    <img src="bright.jpg" alt="Bright Color" />
                    <p> Bright Colors</p>
                </div>

            </div></>
        
    );
}