import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { useHistory } from "react-router-dom";

//Working In Progress

const Signup = () => {
  const { store, actions } = useContext(Context);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [confirm_password, setConfirmPassword] = useState("");
  const history = useHistory();

  const handleClick = () => {
    const opts = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ 
        username: username,
        password: password
      }),
    }
    
    console.log(opts);
  };

  

//use the library https://react-hook-form.com/form-builder/

    return (
    <div className="text-center mt-5">
      <h1>Signup</h1>
      <br></br>
      {(store.token && store.token!="" && store.token!=undefined) ? "You are logged in with this token " + store.token :
      <div>
        <input
          type="text" id="username"
          placeholder="create username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br></br>
        <br></br>
        <input
          type="email" id="email"
          placeholder="your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br></br>
        <br></br>
        <input
          type="password" id="password"
          placeholder="create password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br></br>
        <br></br>
        <input
          type="confirm_password" id="confirm_password"
          placeholder="confirm password"
          value={confirm_password}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <p id="message">Password Status</p>
        <br></br>
        <br></br>
        <button
          type="button"
          className="btn btn-outline-info"
          onClick={handleClick}
        >
          Signup
        </button>
      </div>
      }
    </div>
  );
};

export default Signup;
