// Quiz.jsx
import { useState } from 'react';
import styles from './Quiz.module.css';
import 'bootstrap/dist/css/bootstrap.css';
const Quiz = ({ question, options, correctAnswer, onAnswer, onNextQuestion }) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [isCorrect, setIsCorrect] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);

    if (option === correctAnswer) {
      setIsCorrect(true);
      onAnswer(true); // Notify QuestionList of the correct answer
    } else {
      setIsCorrect(false);
      onAnswer(false); // Notify QuestionList of an incorrect answer
    }

    // Move to the next question immediately
    setTimeout(() => {
      setSelectedOption("");
      setIsCorrect(null);
      onNextQuestion();
    }, 100); // You can adjust the delay time as needed
  };

  return (
    <>
      <div className={styles.question}>
        {question}
      </div>
      <ul className={styles.list}>
        {Array.isArray(options) && options.map((option, index) => (
          <li key={index}>
            <button
              className={styles.listopt}
              onClick={() => handleOptionClick(option)}
              disabled={selectedOption !== ""}
            >
              {option}
            </button>
          </li>
        ))}
      </ul>

    </>
  );
};

export default Quiz;
