import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import "../../styles/signup.css";
import { useHistory } from "react-router-dom";
import Logo from "../../img/logo.png";

const Signup = () => {
    const { store, actions } = useContext(Context);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState(false);
    const history = useHistory();
    const [passwordStatus, setPasswordStatus] = useState("");
    const [birthday, setBirthday] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    
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
                birthday: birthday,
                firstname: firstname,
                lastname: lastname,
            }),
        };

        const response = await fetch(`${process.env.BASE_URL}signup`, opts);
        
        const data = await response.json();
        console.log("data " + data)

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

    const handlePassword = (value) => {
        setPassword(value);

        if (confirmPassword == value) {
            setPasswordStatus("Password Match");
        } else {
            setPasswordStatus("Password Mismatch");
        }

        console.log("passwordStatus");
    }

    const handleConfirmPassword = (value) => {
        setConfirmPassword(value);

        if (password == value) {
            setPasswordStatus("Password Match");
        } else {
            setPasswordStatus("Password Mismatch");
        }

        console.log("passwordStatus");
    }
    //use the library https://react-hook-form.com/form-builder/
    
    return (
        <div className="signup">
            <img src={Logo} height="40" alt="logo" />
            <h1>Create an account</h1>
            <br></br>
            {store.token && store.token != "" && store.token != undefined ? (
                "You are logged in with this token " + store.token
            ) : (
                <div>
                    <form className="needs-validation">
                        <label className="signup-label"><strong>Username:</strong></label>
                        <input
                            className="d-flex flex-column py-1 form-s"
                            type="text"
                            id="username"
                            placeholder="create a username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                        <label className="signup-label"><strong>Email:</strong></label>
                        <input
                            className="d-flex flex-column py-1 form-s"
                            type="email"
                            id="email"
                            placeholder="your email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <label className="signup-label"><strong>Password:</strong></label>
                        <input
                            className="d-flex flex-column py-1 form-s"
                            type="password"
                            id="password"
                            placeholder="create password"
                            value={password}
                            onChange={(e) => handlePassword(e.target.value)}
                            required
                        />
                        <label className="signup-label"><strong>Confirm Password:</strong></label>
                        <input
                            className="d-flex flex-column py-1 form-s"
                            type="password"
                            id="confirm_password"
                            placeholder="confirm password"
                            value={confirmPassword}
                            onChange={(e) => handleConfirmPassword(e.target.value)}
                            required
                        />
                        <p>{passwordStatus}</p>



                    <label className="signup-label"><strong>First Name:</strong></label>
                    <input
                        className="d-flex flex-column py-1 form-s"
                        type="firstname"
                        id="firstname"
                        placeholder="your firstname"
                        value={firstname}
                        onChange={(e) => setFirstname(e.target.value)}
                    />
                    <label className="signup-label"><strong>Last Name:</strong></label>
                    <input
                        className="d-flex flex-column py-1 form-s"
                        type="text"
                        id="lastname"
                        placeholder="your lastname"
                        value={lastname}
                        onChange={(e) => setLastname(e.target.value)}
                    />
                    
                    
                    <label className="signup-label"><strong>Birthdate:</strong></label>
                    <input
                        className="d-flex  py-1 form-s"
                        type="date"
                        id="birthday"
                        placeholder="your birthday"
                        value={birthday}
                        onChange={(e) => setBirthday(e.target.value)}
                    />
                    
                    
                        
                    <button
                        type="button"
                        className="btn btn-outline-info bto"
                        onClick={handleClick}
                    >
                        Get Started
                    </button>

                    <br></br>

                    {/* Insert html alert */}
                    {error ? "Error creating the user" : null}
                    
                    </form>
                </div>
            )}
        </div>
    );
};

export default Signup;
