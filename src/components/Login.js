import React from "react";
import { useState } from "react";
import { PropTypes } from "prop-types";

function Login(props) {
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (event) => {
    // TODO Call API instead of this alert to actually log the user in.
    // Only change logged in state if the login was successful!
    props.login();
    console.log("Signing in for " + state.email);
    event.preventDefault();
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
