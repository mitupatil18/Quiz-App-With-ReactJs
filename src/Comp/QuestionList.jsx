// QuestionList.jsx
import { useState } from "react";
import Quiz from "./Quiz";
import styles from "./QuestionList.module.css";
const QuestionList = () => {
  const questions = [
    {
      question:
        "Which of the following is used in React.js to increase performance?",
      options: ["React Fiber", "React Router", "Redux", "React Context"],
      correctAnswer: "React Fiber",
    },
    {
      question: "What is the state of React class component?",
      options: [
        "A JavaScript method for sorting arrays",
        "A built-in object that stores component data",
        "A CSS class used for component styling",
        "A React component's initial render method",
      ],
      correctAnswer: "A built-in object that stores component data",
    },
    {
      question: "What is React.js primarily used for?",
      options: [
        "Server-side scripting",
        "Front-end web development",
        "Mobile app development",
        "Database management",
      ],
      correctAnswer: "Front-end web development",
    },
    {
      question: "Who developed React.js?",
      options: ["Google", "Facebook", "Microsoft", "Amazon"],
      correctAnswer: "Facebook",
    },
    {
      question:
        "Which programming language is commonly used to write React.js applications?",
      options: ["Ruby", "Python", "JavaScript", "PHP"],
      correctAnswer: "JavaScript",
    },
    {
      question:
        "What is the term used to describe React's ability to update only changed parts of the user interface?",
      options: [
        "Efficient Rendering",
        "Dynamic Reconciliation",
        "Virtual DOM",
        "Component Reusability",
      ],
      correctAnswer: "Virtual DOM",
    },
    {
      question: "What is JSX in React.js?",
      options: [
        "A JavaScript library",
        "A file extension for React components",
        "A syntax extension for JavaScript",
        "A server-side rendering technology",
      ],
      correctAnswer: "A syntax extension for JavaScript",
    },
    {
      question: "Which virtual DOM library is used by React.js?",
      options: ["jQuery", "Vue.js", "ReactDOM", "Redux"],
      correctAnswer: "ReactDOM",
    },
    {
      question:
        "What is the primary function of ReactDOM in a React application?",
      options: [
        "State management",
        "Virtual DOM manipulation",
        "Server-side rendering",
        "Routing and navigation",
      ],
      correctAnswer: "Virtual DOM manipulation",
    },
    {
      question: "In React, what are components?",
      options: [
        "Functional units of code",
        "Web browsers",
        "Mobile devices",
        "Server-side scripts",
      ],
      correctAnswer: "Functional units of code",
    },
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [quizEnded, setQuizEnded] = useState(false);

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setQuizEnded(true);
    }
  };

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
  };

  return (
    <div>
      {!quizEnded ? (
        <Quiz
          question={questions[currentQuestionIndex].question}
          options={questions[currentQuestionIndex].options}
          correctAnswer={questions[currentQuestionIndex].correctAnswer}
          onAnswer={handleAnswer}
          onNextQuestion={handleNextQuestion}
        />
      ) : (
        <div className={styles.endcontainer}>
          <div className="card bg-dark text-white">
            <img  src="https://images.unsplash.com/photo-1639781315111-1f4546e1b470?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img img-fluid" alt="..." />
            <div className="card-img-overlay">
              <h5 className={`card-title ${styles.quizans}`}>Quiz Ended!</h5>
              <p className={`card-text ${styles.quizans}`}>
          
             Your score: {score}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuestionList;
