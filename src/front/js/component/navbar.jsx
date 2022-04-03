import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../img/logo.png";

export const Navbar = () => {
    const { store, actions } = useContext(Context);

    let location = useLocation();
    console.log(location.pathname);

    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container">
                <Link to="/">
                    <span className="navbar-brand mb-0 h1 text-danger">
                        <img src={Logo} height="40" alt="logo" />
                    </span>
                </Link>

                <Link to="/trips">
                    <span className="navbar-brand mb-0 h1 text-danger">
                        Trips
                    </span>
                </Link>

                <Link to="/profile">
                    <span className="navbar-brand mb-0 h1 text-danger">
                        Profile
                    </span>
                </Link>

                <div className="ml-auto">
                    {!store.token ? (
                        <Link to="/login">
                            <button className="btn btn-info text-white">
                                Login
                            </button>
                        </Link>
                    ) : (
                        <Link to="/login" onClick={() => actions.logout()}>
                            <button className="btn btn-info text-white">
                                Logout
                            </button>
                        </Link>
                    )}

                    {!store.token && (
                        <Link to="/signup">
                            <button className="btn btn-outline-info">
                                Signup
                            </button>
                        </Link>
                    )}
                </div>
            </div>
        </nav>
    );
};
