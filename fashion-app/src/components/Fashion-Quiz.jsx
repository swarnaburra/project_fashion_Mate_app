const questions = [

   { question:"Which of the colors palettes do you gravitate towards most?",
    choices: [1,2,3,4],
    answer: 0 
   },
   { question:"How many guitars does he have?",
    choices: [1,2,3,4],
    answer: 2
   },
   { question:"what is Jamey's favorite color",
    choices: ["grey", "yellow", "neon pink", "red"],
    answer: 0
   },
   { question:"What is the name of Jamey's favorite guitar?",
    choices: ["Martin", "Fender", "Yamaha", "Gibson"],
    answer: 0
   } 
    ]
   
   let currentQuestionIndex = 0;
   let currentQuestionNumber = 1;
   let currentScore = 0;
    
    const questionElement = document.getElementById("question");
    const answerButtons = document.querySelectorAll(".btn-answer");
    const feedbackElement = document.getElementById("feedback");
    const nextButton = document.getElementById("nextBtn");
    const scoreElement = document.getElementById("score");
    const questionNumber = document.getElementById("progress");
    
    // initialize question
    function askQuestion() {
        // Question number
        questionNumber.textContent = `Question ${currentQuestionIndex +1} of ${questions.length}`;
        // Track score
        scoreElement.textContent = `Score: ${currentScore} out of ${questions.length}`;

        const text = questions[currentQuestionIndex];
        questionElement.textContent = text.question;
        answerButtons.forEach((btn, index) => {
            btn.textContent = text.choices[index];
            btn.disabled = false; // re-enable buttons for new question
        });

        feedbackElement.textContent = "";
    }

    // Handle answer click
    answerButtons.forEach((btn, index) => {
        btn.addEventListener("click", () => {
            const text = questions[currentQuestionIndex];
            if (index === text.answer) {
                feedbackElement.textContent = "Correct!";
                feedbackElement.style.color = "green";
                currentScore += 1;
            } else {
                feedbackElement.textContent = "Wrong!";
                feedbackElement.style.color = "red";
            }

            // Track score
            scoreElement.textContent = `Score: ${currentScore} out of ${questions.length}`;
            // disable all answer buttons
            answerButtons.forEach(btn => btn.disabled = true);
        });
    });

    // Handle next question
    nextButton.addEventListener("click", () => {
        currentQuestionIndex++;
        questionNumber.textContent = `Question ${currentQuestionIndex +1} of ${questions.length}`;
        if (currentQuestionIndex < questions.length) {
            askQuestion();
        } else {
            // End of Quiz
            questionElement.textContent = "Quiz Complete!"
            document.querySelector(".answers").style.display = "none";
            nextButton.style.display = "none";
            feedbackElement.style.display = "none";
            questionNumber.textContent = `Question ${currentQuestionIndex} of ${questions.length}`;
        }
    });

    // Initial question
    askQuestion();