import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { useHistory } from "react-router-dom";
import Logo from "../../img/logo.png";

const Login = () => {
  const { store, actions } = useContext(Context);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const [error, setError] = useState(false);

  const token = sessionStorage.getItem("token");

  const handleClick = () => {
    actions.login(username, password).then((x) => {
      if (x == true) {
        history.push("/trips");
      } else {
        setError(true);
        setTimeout(() => {
          setError(false);
        }, 2000);
      }
    });
  };

  console.log(token);

  return (
    <div className="text-center mt-5">
      <img src={Logo} height="40" alt="logo" />
      <h1>Login to your account</h1>
      <p>Welcome back! Please enter your details.</p>
      <br></br>
      {store.token && store.token != "" && store.token != undefined ? (
        "You are logged in with this token " + store.token
      ) : (
        <div>
          <input
            type="text"
            placeholder="your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <br></br>
          <br></br>
          <input
            type="password"
            placeholder="your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br></br>
          <br></br>
          <button
            type="button"
            className="btn btn-outline-info"
            onClick={handleClick}
          >
            Login
          </button>
        </div>
      )}
      {error ? "Error creating the user" : null}
    </div>
  );
};

export default Login;
