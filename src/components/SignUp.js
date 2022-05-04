import React from "react";

function SignUp() {
  const state = {
    givenName: undefined,
    surname: undefined,
    email: undefined,
    password: undefined,
  };
  const handleSubmit = (event) => {
    // TODO Call API instead of this alert to actually create the account, then log the user inmn
    console.log("Creating account for email " + state.email);
    event.preventDefault();
  };

  const handleGivenNameChange = (event) => {
    state.givenName = event.target.value;
  };
  const handleSurnameChange = (event) => {
    state.surname = event.target.value;
  };
  const handleEmailChange = (event) => {
    state.email = event.target.value;
  };
  const handlePasswordChange = (event) => {
    state.password = event.target.value;
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

export default SignUp;
