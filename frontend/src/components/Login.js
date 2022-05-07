import React from "react";
import { useState } from "react";
import { PropTypes } from "prop-types";

function Login(props) {
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    const result = await fetch("http://localhost:8080/login/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(state),
    });

    (await result.json()) === true ? props.login() : console.log("fail");
  };

  const handleEmailChange = (event) => {
    setState({ email: event.target.value, password: state.password });
  };
  const handlePasswordChange = (event) => {
    setState({ password: event.target.value, email: state.email });
  };

  return (
    <>
      <h1>Login</h1>
      <h3>Enter your account details</h3>

      <form onSubmit={handleSubmit}>
        <label>
          Email address:
          <input
            type="email"
            style={{ display: "block" }}
            value={state.email}
            onChange={handleEmailChange}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            style={{ display: "block" }}
            value={state.password}
            onChange={handlePasswordChange}
          />
        </label>
        <input type="submit" value="Login" />
      </form>
    </>
  );
}

Login.propTypes = {
  login: PropTypes.func,
};

export default Login;
