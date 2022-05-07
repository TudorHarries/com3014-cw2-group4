
import React from "react";

function Question() {

  const handleSubmit = event => {
    event.preventDefault();
    alert('You have created a question');
  }

  return (
    <div className="wrapper">
      <h3>Create a Question</h3>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label>
            <p>Prompt</p>
            <input question="question" />
            <p>Answer</p>
            <input answer="answer" />
          </label>
        </fieldset>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}



export default Question;
