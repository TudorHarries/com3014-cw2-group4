import React from "react";

function Login() {
  const state = {
    email: undefined,
    password: undefined,
  };
  const handleSubmit = (event) => {
    // TODO Call API instead of this alert to actually create the account, then log the user in
    console.log("Signing in for " + state.email);
    event.preventDefault();
  };

  const handleEmailChange = (event) => {
    state.email = event.target.value;
  };
  const handlePasswordChange = (event) => {
    state.password = event.target.value;
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

export default Login;
