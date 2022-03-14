import React, { useContext }from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1 text-danger">NoZig Logo Here</span>
				</Link>
				<div className="ml-auto">
					{ !store.token ? 
						
						<Link to="/login">
							<button className="btn btn-info text-white">Login</button>
						</Link>
						:
						<Link to="/login">
							<button onClick={() => actions.logout()} className="btn btn-info text-white">Logout</button>
						</Link>
					}
					
					{ !store.token ? 
						<Link to="/signup">
						<button className="btn btn-outline-info">Signup</button>
						</Link>
						:
						<p></p>
					}
					
				</div>
			</div>
		</nav>
	);
};
