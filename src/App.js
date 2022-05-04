import "./App.css";
import Question from "./components/Question";
import Quiz from "./components/Quiz";
import Quizzes from "./components/Quizzes";
import SignUp from "./components/SignUp";
import QuizPlayer from "./components/QuizPlayer";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <h1>Home</h1>
      <div>
        <Question />
        <Quiz />
        <Quizzes />
        <li>
          <Link to="/login">Login</Link>
        </li>
        <QuizPlayer />
      </div>

      <Routes>
        <Route path="login" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
