import React, { useState, useEffect, useContext } from "react";
import { Container, Row, Col, Image, Form, Button } from "react-bootstrap";
import { Context } from "../../store/appContext";

import HeroImage from "../../../img/hero_img.png";

const UserProfile = () => {
    const { store, actions } = useContext(Context);

    const [getFirstname, setGetFirstname] = useState("");
    const [firstname, setFirstname] = useState("");

    const [getLastname, setGetLastname] = useState("");
    const [lastname, setLastname] = useState("");

    const [getUsername, setGetUsername] = useState("");
    const [username, setUsername] = useState("");

    const [getBirthday, setGetBirthday] = useState("");
    const [birthday, setBirthday] = useState("");

    const [getPassword, setGetPassword] = useState("");
    const [password, setPassword] = useState("");

    const [email, setEmail] = useState("");

    const [edit, setEdit] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                var myHeaders = new Headers();

                myHeaders.append("Authorization", "Bearer " + store.token);

                var requestOptions = {
                    method: "GET",
                    headers: myHeaders,
                    redirect: "follow",
                };

                const response = await fetch(
                    `${process.env.BACKEND_URL}profile/user`,
                    requestOptions
                );

                const json = await response.json();

                //setTripsList(json)
                setFirstname(json.first_name);
                setLastname(json.last_name);
                setUsername(json.username);
                setBirthday(json.birthday);
                setPassword(json.password);
                setEmail(json.email);
            } catch (error) {
                console.log("error fetch location data", error);
            }
        };

        if (store.token) {
            fetchData();
        }
    }, [store.token]);

    const handleClick = async () => {
        try {
            var myHeaders = new Headers();

            myHeaders.append("Authorization", "Bearer " + store.token);

            var requestOptions = {
                method: "GET",
                headers: myHeaders,
                redirect: "follow",
            };

            const response = await fetch(
                `${process.env.BACKEND_URL}profile/user`,
                requestOptions
            );

            const json = await response.json();

            //setTripsList(json)
            setFirstname(json.first_name);
            setLastname(json.last_name);
            setUsername(json.username);
            setBirthday(json.birthday);
            setPassword(json.password);
            setEmail(json.email);
        } catch (error) {
            console.log("error fetch location data", error);
        }
    };

    let birthDate = "";
    console.log(birthday);
    if (birthday != null) {
        birthDate = birthday;
        birthDate = birthDate.slice(0, -13);
        birthDate = birthDate.slice(5);
    }

    return (
        <>
            <Col xs={12} lg={6}>
                <Row className="d-flex justify-content-center ">
                    {edit == "" ? 
                    (
                    <>
                        <Col xs={12} lg={8} className="">
                            <Row className="d-flex justify-content-center py-2 py-lg-2 ">
                                <Row className="align-items-center ">
                                    <Col xs={4} lg={4}>
                                        <Row>
                                            <Image src={HeroImage} roundedCircle />
                                        </Row>
                                    </Col>
                                    <Col xs={8} lg={8}>
                                        <h2 className="profile-title">
                                            <span className="pink">
                                                {firstname}
                                            </span>
                                        </h2>
                                        <h2 className="profile-title">
                                            <span className="blue">{lastname}</span>
                                        </h2>
                                    </Col>
                                    <Col xs={12} lg={8}>
                                    <Row className="py-2 align-items-center profile mb-3">
                                        
                                            <Row className="d-flex disabled-row align-items-center mb-3 mt-3">
                                                <Col xs={10} lg={10}>
                                                    <h5>
                                                        <span className="blue pe-3">
                                                            <i class="fa-solid fa-user"></i>
                                                        </span>
                                                        {username}
                                                    </h5>
                                                </Col>
                                            </Row>
                                            <Row className="d-flex disabled-row align-items-center mb-3 mt-3">
                                                    <Col xs={10} lg={10}>
                                                        <h5>
                                                            <span className="pink pe-3">
                                                                <i class="fa-solid fa-cake-candles"></i>
                                                            </span>
                                                            {birthDate}
                                                        </h5>
                                                    </Col>
                                                </Row>
                                                <Row className="d-flex disabled-row align-items-center mb-3 mt-3">
                                                    <Col xs={10} lg={10}>
                                                        <h5>
                                                            <span className="blue pe-3">
                                                                <i class="fa-solid fa-key"></i>
                                                            </span>
                                                            HIDDEN
                                                        </h5>
                                                    </Col>
                                                </Row>
                                                <Row className="d-flex disabled-row align-items-center mb-3 mt-3">
                                                    <Col xs={10} lg={10}>
                                            <h5>
                                                <span className="pink pe-3">
                                                    <i class="fa-solid fa-envelope"></i>
                                                </span>
                                                {email}
                                            </h5>
                                        </Col>
                                        </Row>
                                    </Row>
                                        <Col xs={2} lg={2}>
                                            <Button
                                                className="btn-submit-route"
                                                type="submit"
                                                size="lg"
                                                onClick={() => setEdit("edit")}>
                                                Edit
                                            </Button>
                                        </Col>
                                    </Col>
                                </Row>
                            </Row>
                        </Col>
                    </>
                    ) 
                    :
                    (
                        <>
                            <Col xs={12} lg={8} className="border">
                                <p>picture</p>
                                <p>FName Lname</p>
                                <p>username</p>
                                <p>email</p>
                                <p>password</p>
                                <p>birthday</p>


                            </Col>
                        </>
                    )
                    }
                </Row>
            </Col>
        </>
    );
};

export default UserProfile;
