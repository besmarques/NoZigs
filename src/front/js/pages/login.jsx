import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/login.css";
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
    // Front end fetch is done here throught the store
    actions.login(username, password).then((x) => {
      console.log(x);
      if (x.msg) {
        history.push("/profile");
      } else {
        console.log(x);
        setError(x.err);
        setTimeout(() => {
          setError(false);
        }, 2000);
      }
    });
  };

  console.log(token);

  return (
    <div className="login">
      <img src={Logo} height="40" alt="logo" />
      <h1>Login to your account</h1>
      <p>Welcome back! Please enter your details.</p>

      
        <div>
          <label className="d-flex flex-column py-1 form-l">
            Email
            <input
              className="form-i"
              label="Email"
              type="text"
              placeholder="Enter your email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <label className="d-flex flex-column py-1 form-l">
            Password
            <input
              className="form-i"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button
            type="button"
            className="btn btn-outline-info bto"
            onClick={handleClick}
          >
            Login
          </button>
        </div>
     
      {error ? error : null}
    </div>
  );
};

export default Login;
