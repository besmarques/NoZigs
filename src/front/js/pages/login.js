import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { useHistory } from "react-router-dom";

const Login = () => {
  const { store, actions } = useContext(Context);
  const [ user, setUser ] = useState("");
  const [ password, setPassword ] = useState("");
  const history = useHistory();

  const token = sessionStorage.getItem("token");

  const handleClick = () => {
    actions.login(user, password).then(() => {
      history.push("/") //this should be changed to /searchPage once completed
    })
  };

  return (
    <div className="text-center mt-5">
      <h1>Login</h1>
      <br></br>
        {(store.token && store.token!="" && store.token!=undefined) ? "You are logged in with this token " + store.token :
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
