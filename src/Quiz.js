import React, { useState } from "react";

const questions = [
  {
    question: "Which animal is the king of the jungle?",
    options: ["Giraffe", "Lion", "Tiger", "Elephant"],
    answer: "Lion",
  },
  {
    question: "What is the largest planet in our solar system?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    answer: "Jupiter",
  },
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    answer: "Paris",
  },
  {
    question: "Who wrote 'Romeo and Juliet'?",
    options: [
      "Charles Dickens",
      "Jane Austen",
      "William Shakespeare",
      "Mark Twain",
    ],
    answer: "William Shakespeare",
  },
  {
    question: "What is the chemical symbol for water?",
    options: ["O₂", "H₂", "CO₂", "H₂O"],
    answer: "H₂O",
  },
  {
    question: "Which element has the atomic number 1?",
    options: ["Oxygen", "Helium", "Hydrogen", "Carbon"],
    answer: "Hydrogen",
  },
  {
    question: "What is the tallest mountain in the world?",
    options: ["K2", "Kangchenjunga", "Mount Everest", "Lhotse"],
    answer: "Mount Everest",
  },
  {
    question: "Who painted the Mona Lisa?",
    options: [
      "Vincent van Gogh",
      "Pablo Picasso",
      "Leonardo da Vinci",
      "Claude Monet",
    ],
    answer: "Leonardo da Vinci",
  },
  {
    question: "What is the smallest prime number?",
    options: ["1", "2", "3", "5"],
    answer: "2",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Venus", "Jupiter"],
    answer: "Mars",
  },
];

function Quiz() {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [val, setVal] = useState("");

  const handleChange = (e) => {
    setVal(e.target.value);
  };
  const hanleRestart= ()=>{
   setIndex(0)
   setScore(0)
  }
  const handleSubmit = () => {
    if (questions.length - 1 === index) {
      return;
    }

    // Check if the selected answer is correct
    if (val === questions[index].answer) {
      setScore((score) => score + 1);
    }

    // Move to the next question
    setIndex((index) => index + 1);

    // Reset the selected value
    setVal("");
  };

  return (
    <>
      <div className="box">
        <h1>Quiz App</h1>
      </div>
      <div className="options">
        <div className="box">
          <h2>
            {index === questions.length - 1
              ? `Your Final score is ${score}`
              : questions[index].question}
          </h2>
        </div>
        {index !== questions.length - 1 &&
          questions[index].options.map((op, i) => (
            <div className="box" key={i}>
              <input
                type="radio"
                id={op}
                name="animal"
                value={op}
                onChange={(e) => handleChange(e)}
              />
              <label htmlFor={op}>{op}</label>
            </div>
          ))}
        {index !== questions.length - 1 &&<button onClick={handleSubmit}>Submit</button>}
        {index === questions.length - 1 && <button onClick={hanleRestart}>Restart</button>}

      </div>
    </>
  );
}

export default Quiz;
