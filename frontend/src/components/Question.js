
//import { bool } from "prop-types";
import React from "react";
import { useState } from "react";

function Question() {

  const [state, setState] = useState({
    prompt_text: "",
    //true_false_option: true,
    //option1: "",
    // option2: "",
    // option3: "",
    // option4: "",
    answer_text: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    await fetch("http://localhost:1337/api/questions", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(state),
    });


  }

  const handlePromptChange = (event) => {
    setState({ ...state, prompt_text: event.target.value });
  };
  const handleAnswerChange = (event) => {
    setState({ ...state, answer_text: event.target.value });
  };


  return (
    <div>
      <div className="wrapper">
        <h3>Create a Question</h3>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <label>
              <p>Prompt</p>
              <input
                question="question"
                value={state.prompt_text}
                onChange={handlePromptChange} />
              <p>Answer</p>
              <input answer="answer"
                value={state.answer_text}
                onChange={handleAnswerChange} />
            </label>
          </fieldset>
          <button type="submit">Submit</button>
        </form>
      </div>
      {/* <div className="wrapper">
        <h3>Create a Multiple choice QuestionQuestion</h3>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <label>
              <p>Prompt</p>
              <input question="question" />
              <p>Option 1</p>
              <input option1="option1" />
              <p>Option 2</p>
              <input option2="option2" />
              <p>Option 3</p>
              <input option3="option3" />
              <p>Option 4</p>
              <input option4="option4" />
              <p>Answer</p>
              <input answer="answer" />
            </label>
          </fieldset>
          <button type="submit">Submit</button>
        </form>
      </div> */}
    </div>
  );
}



export default Question;
