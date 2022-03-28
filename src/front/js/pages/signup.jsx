import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import "../../styles/signup.css";
import { useHistory } from "react-router-dom";
import Logo from "../../img/logo.png";
import { set } from "react-hook-form";

const Signup = () => {
  const { store, actions } = useContext(Context);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(false);
  const history = useHistory();

  const handleClick = async () => {
    const opts = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
        confirmPassword: confirmPassword,
        email: email,
      }),
    };

    const response = await fetch(
      "https://3001-nozigs-nozigs-r5bk3wf3fd2.ws-eu38.gitpod.io/api/signup",
      opts
    );

    const data = await response.json();

    if (response.status == 200) {
      sessionStorage.setItem("token", data.token);
      actions.syncTokenFromSessionStore();
      history.push("/profile");
    } else {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 2000);
    }
  };

  //use the library https://react-hook-form.com/form-builder/

  return (
    <div className="signup">
      <img src={Logo} height="40" alt="logo" />
      <h1>Create an account</h1>
      {store.token && store.token != "" && store.token != undefined ? (
        "You are logged in with this token " + store.token
      ) : (
        <div>
          <input
            className="d-flex flex-column py-1 form-s"
            type="text"
            id="username"
            placeholder="your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            className="d-flex flex-column py-1 form-s"
            type="email"
            id="email"
            placeholder="your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            className="d-flex flex-column py-1 form-s"
            type="password"
            id="password"
            placeholder="create password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            className="d-flex flex-column py-1 form-s"
            type="confirm_password"
            id="confirm_password"
            placeholder="confirm password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <p id="message">Password Status</p>

          <button
            type="button"
            className="btn btn-outline-info bto"
            onClick={handleClick}
          >
            Get Started
          </button>

          {/* Insert html alert */}
          {error ? "Error creating the user" : null}
        </div>
      )}
    </div>
  );
};

export default Signup;
