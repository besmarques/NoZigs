import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

const Login = () => {
  const { store, actions } = useContext(Context);
  const [ user, setUser ] = useState("");
  const [ password, setPassword ] = useState("");

  const handleClick = () => {
	const opts = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ 
        login: user,
        password: password
        }),
    };

	console.log(opts)

    fetch(
      "https://3001-nozigs-nozigs-8fn6hvofjfr.ws-eu34.gitpod.io/api/token",
      opts
    )
      .then((resp) => {
        if (resp.status === 200) return resp.json();
        else alert("There was an error!");
      })
      .then(data => {
		  console.log("this came from the backend", data)
		  sessionStorage.setItem("token", data.access_token);
	  })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  };

  return (
    <div className="text-center mt-5">
      <h1>Login</h1>
      <br></br>
      
		{(token && token!="" && token!=undefined) ? "You are logged in with this token" + token : 
			<div>	
				<input
				type="text"
				placeholder="your login"
				value={user}
				onChange={(e) => setUser(e.target.value)}
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
				<button type="button" className="btn btn-outline-info" onClick={handleClick}>Login</button>
			</div>
		}
    </div>
  );
};

export default Login;
