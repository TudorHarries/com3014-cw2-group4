import React from "react";
import { useState } from "react";

// creating an array and passing the number, questions, options, and answers
const questions = [
  {
    numb: 1,
    question: "What colour is the sky?",
    answer: "Blue",
    options: ["Red", "Blue", "Yellow", "Black"],
  },
  {
    numb: 2,
    question: "What colour is banana?",
    answer: "Yellow",
    options: ["Green", "Orange", "Black", "Yellow"],
  },
  {
    numb: 3,
    question: "What colour is an orange?",
    answer: "Orange",
    options: ["Black", "Orange", "Pink", "Yellow"],
  },
];
function QuizPlayer() {
  const [state, setState] = useState({
    timeValue: 15,
    que_count: 0,
    que_numb: 1,
    userScore: 0,
    counter: undefined,
    counterLine: undefined,
    widthValue: 0,
    isQuizActive: false,
  });

  const handleStartQuiz = () => {
    setState({ ...state, isQuizActive: true });
    // For the timer, might be worth using something like https://www.npmjs.com/package/react-timer-hook
  };

  const selectOption = () => {};

  // Return your HTML here
  return (
    <div>
      <div>
        <button onClick={handleStartQuiz}>Start Quiz</button>
      </div>

      {state.isQuizActive ? (
        <div>
          <header>
            <div>Quiz Creator</div>
            <div>
              <div>Time Left</div>
              <div>15</div>
            </div>
          </header>
          <section>
            <div>
              <p>
                {questions[state.que_count].numb} .
                {questions[state.que_count].question}
              </p>
            </div>
            <div>
              {questions[state.que_count].options.map((o) => (
                <button key={o} value={o} onClick={selectOption}>
                  {o}
                </button>
              ))}
            </div>
          </section>

          <footer>
            <div>
              <p>
                {state.que_numb} of {questions.length}
              </p>
            </div>
            <button>Next Question</button>
          </footer>
        </div>
      ) : null}
    </div>
  );
}

export default QuizPlayer;
