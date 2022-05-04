import "./App.css";
import Question from "./components/Question";
import Quiz from "./components/Quiz";
import Quizzes from "./components/Quizzes";
import SignUp from "./components/SignUp";
import QuizPlayer from "./components/QuizPlayer";
import Home from "./components/Home";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <li>
        <Link to="/">Home</Link>
      </li>
      <div>
        <Question />
        <Quiz />
        <Quizzes />
        <li>
          <Link to="/signup">Signup</Link>
        </li>
        <QuizPlayer />
      </div>

      <Routes>
        <Route path="signup" element={<SignUp />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
