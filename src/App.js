import "./App.css";
import Question from "./components/Question";
import Quiz from "./components/Quiz";
import Quizzes from "./components/Quizzes";
import SignUp from "./components/SignUp";
import QuizPlayer from "./components/QuizPlayer";
import Home from "./components/Home";
import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./components/Login";

function App() {
  const [state, setState] = useState({
    loggedIn: false,
  });

  const changeLoggedInState = () => {
    console.log("changing logged in state");
    setState({ loggedIn: !state.loggedIn });
  };

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
          <Link to="/signup">Sign up</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <QuizPlayer />
      </div>

      <Routes>
        <Route
          path="signup"
          element={<SignUp changeLoggedInState={changeLoggedInState} />}
        />
        <Route
          path="login"
          element={<Login changeLoggedInState={changeLoggedInState} />}
        />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
