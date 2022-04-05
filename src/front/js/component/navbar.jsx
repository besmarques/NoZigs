import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../img/logo.png";
import "../../styles/navbar.css";

export const Navbar = () => {
    const { store, actions } = useContext(Context);

    let location = useLocation();
    console.log(location.pathname);

    const display =
        /*location.pathname === "/" ||*/
        location.pathname === "/login" ||
        location.pathname === "/signup"
            ? "display-none"
            : "";

    console.log(display);
    return (
        <nav className="navbar py-4">
            <div className="container">
                <Link to="/">
                    <span className="navbar-brand mb-0 h1 text-danger">
                        <img src={Logo} height="40" alt="logo" />
                    </span>
                </Link>

                <div className="ml-auto">
                    <div className="d-flex align-items-center justify-content-around">
                        {store.token ? (
                            <Link to="/trips" className="link">
                                <span>Trips</span>
                            </Link>
                        ) :("")}

                        {store.token ? (
                            <Link to="/profile" className="link">
                                <span>Profile</span>
                            </Link>
                        ) :("")}

                        {!store.token ? (
                            <Link to="/login">
                                <button className="login-link">Login</button>
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
                                <button className="signupu">Signup</button>
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};
