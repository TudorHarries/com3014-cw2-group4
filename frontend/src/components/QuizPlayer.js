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
    userCorrect: false,
    userIncorrect: false,
    nextQuestion: false,
  });

  const handleStartQuiz = () => {
    setState({ ...state, isQuizActive: true });
    // For the timer, might be worth using something like https://www.npmjs.com/package/react-timer-hook
  };

  const selectOption = (event) => {
    if (event.target.value === questions[state.que_count].answer) {
      setState({
        ...state,
        userScore: state.userScore + 1,
        userCorrect: true,
        userIncorrect: false,
        nextQuestion: true,
      });
    } else {
      setState({
        ...state,
        userCorrect: false,
        userIncorrect: true,
        nextQuestion: true,
      });
    }
  };

  const handleNextButton = () => {
    setState({ ...state });

    if (state.que_count < questions.length - 1) {
      setState({
        ...state,
        nextQuestion: false,
        userCorrect: false,
        userIncorrect: false,
        que_count: state.que_count + 1,
        que_numb: state.que_numb + 1,
      });
      // Clear timer
      // start timer
    } else {
      setState({
        ...state,
        nextQuestion: false,
        userCorrect: false,
        userIncorrect: false,
        isQuizActive: false,
      });
      // clear timer
      // show results
    }
  };

  const correctStyle = {
    backgroundColor: "green",
    color: "white",
  };

  const incorrectStyle = {
    backgroundColor: "red",
    color: "white",
  };

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
                <button
                  style={
                    questions[state.que_count].answer === o
                      ? state.userCorrect === true &&
                        state.userIncorrect === false
                        ? correctStyle
                        : state.userIncorrect == true
                        ? incorrectStyle
                        : null
                      : null
                  }
                  key={o}
                  value={o}
                  onClick={selectOption}
                  disabled={state.nextQuestion}
                >
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
            {state.nextQuestion ? (
              <button onClick={handleNextButton}>Next Question</button>
            ) : null}
          </footer>
        </div>
      ) : null}
    </div>
  );
}

export default QuizPlayer;
