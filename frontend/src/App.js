import "./App.css";
import Question from "./components/Question";
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

  const login = () => {
    setState({ ...state, loggedIn: true });
  };

  const logout = () => {
    setState({ ...state, loggedIn: false });
  };

  return (
    <Router>
      <li>
        <Link to="/">Home</Link>
      </li>
      <div>
        {!state.loggedIn ? (
          <div>
            <li>
              <Link to="/signup">Sign up</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </div>
        ) : (
          <div>
            <li>
              <Link to="/quizPlayer">Play quiz</Link>
            </li>
            <li>
              <Link to="/question">create question</Link>
            </li>

            <button onClick={logout}>Logout</button>
          </div>
        )}
      </div>

      <Routes>
        <Route path="quizPlayer" element={<QuizPlayer />} />
        <Route path="question" element={<Question />} />
        <Route path="signup" element={<SignUp login={login} />} />
        <Route path="login" element={<Login login={login} />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
