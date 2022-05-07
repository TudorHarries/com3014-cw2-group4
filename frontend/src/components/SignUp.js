import React from "react";
import { useState } from "react";
import { PropTypes } from "prop-types";
import axios from "axios";

function SignUp(props) {
  const [state, setState] = useState({
    givenName: "",
    surname: "",
    email: "",
    password: "",
  });

  const handleSubmit = async () => {
    const result = await axios.post("http://localhost:8080/account/", {
      ...state,
      permissions: [{ name: "test" }],
    });
    result.data === true ? props.login() : console.log("fail");
  };

  const handleGivenNameChange = (event) => {
    setState({
      givenName: event.target.value,
      password: state.password,
      surname: state.surname,
      email: state.email,
    });
  };
  const handleSurnameChange = (event) => {
    setState({
      surname: event.target.value,
      password: state.password,
      givenName: state.givenName,
      email: state.email,
    });
  };
  const handleEmailChange = (event) => {
    setState({
      email: event.target.value,
      password: state.password,
      surname: state.surname,
      givenName: state.givenName,
    });
  };
  const handlePasswordChange = (event) => {
    setState({
      password: event.target.value,
      givenName: state.givenName,
      surname: state.surname,
      email: state.email,
    });
  };

  return (
    <>
      <h1>Create account</h1>
      <h3>Enter your details</h3>

      <form onSubmit={handleSubmit}>
        <label>
          Given Name:
          <input
            type="text"
            style={{ display: "block" }}
            value={state.givenName}
            onChange={handleGivenNameChange}
          />
        </label>
        <label>
          Surname:
          <input
            type="text"
            style={{ display: "block" }}
            value={state.surname}
            onChange={handleSurnameChange}
          />
        </label>
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
        <input type="submit" value="Sign up" />
      </form>
    </>
  );
}

SignUp.propTypes = {
  login: PropTypes.func,
};

export default SignUp;
