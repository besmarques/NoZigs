import React, { useState, useEffect, useContext } from "react";
import {Container, Row, Col, Image, Form } from 'react-bootstrap';
import { Context } from "../store/appContext";


import HeroImage from "../../img/hero_img.png";

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


    useEffect(() => {
        const fetchData = async () => {
        
        try {
            var myHeaders = new Headers();
            
            myHeaders.append("Authorization", "Bearer " + store.token);

            var requestOptions = {
                method: 'GET',
                headers: myHeaders,
                redirect: 'follow'
            };

            const response = await fetch(`${process.env.BASE_URL}profile/user`, requestOptions);
    
            const json = await response.json();

            //setTripsList(json)
            setFirstname(json.first_name)
            setLastname(json.last_name)
            setUsername(json.username)
            setBirthday(json.birthday)
            setPassword(json.password)
            setEmail(json.email)
            } 
        
        catch (error) {
            console.log("error fetch location data", error);
            }
        };

        if(store.token){
            fetchData();
            }
    }, [store.token]);

    let birthDate = "";
    console.log(birthday);
    if(birthday != null){
        birthDate = birthday;
	    birthDate = birthDate.slice(0,-13);
	    birthDate = birthDate.slice(5);
    }


    return (
        <>
        <Col xs={12} lg={6} >
            <Row  className="d-flex justify-content-center ">
                <Col xs={12} lg={8} className="border">  
                    <Row className="d-flex justify-content-center py-2 py-lg-2 " >
                        <Row className="align-items-center">
                            <Col xs={4} lg={4}>
                                <Row >
                                    <Image src={HeroImage} roundedCircle/>
                                </Row>
                            </Col>
                            <Col xs={8} lg={8}>
                                <h2 className="profile-title"> 
                                    <span className="pink">{firstname}</span>
                                </h2>
                                <h2 className="profile-title">
                                    <span className="blue">{lastname}</span>
                                </h2>  
                            </Col>
                        </Row>
                    </Row>
                </Col>
                <Col xs={12} lg={8} >
                    <Row className="row-10">
                        <Col xs={12} lg={12}>
                            <Row className="py-2 align-items-center profile border">
                                <Form.Group controlId="Username">
                                    {username == "" ? 
                                    (<Row className="enabled-row">
                                        <Col xs={2} lg={1} className="d-none d-lg-block">
                                            <span className="blue"><i class="fa-solid fa-user"></i>{" "}</span>
                                        </Col>
                                        <Col xs={10} lg={9}>
                                            <Form.Control mask="999.999.999-99" type="text" value={getUsername} onChange={(e) => setGetUsername(e.target.value)} onKeyPress={(e) => {event.key == "Enter" ? setUsername(getUsername):""} }/>
                                        </Col>
                                        {/**<Col xs={2} lg={1}>
                                            <button type="submit" className="btn-form" onClick={() => setUsername(getUsername)}><i class="fa fa-save"></i></button>
                                        </Col>*/}
                                    </Row>)
                                    :
                                    (<Row className="d-flex disabled-row align-items-center">
                                        <Col xs={10} lg={10} >
                                            <h5>
                                                <span className="blue pe-3"><i class="fa-solid fa-user"></i></span>
                                                {username}
                                            </h5>
                                        </Col>
                                       {/* <Col xs={2} lg={2} className="d-block d-lg-none">
                                            <button type="submit" className="btn-form d-block d-lg-none" ><i class="fa fa-edit" onClick={() => setUsername("")}></i></button>
                                        </Col>*/}
                                    </Row>)}
                                </Form.Group>
                            </Row>
                        </Col>
                        <Col xs={12} lg={12}>
                            <Row className="py-2 align-items-center profile border">
                                <Form.Group controlId="Birthday">
                                    {birthday == "" ? 
                                    (<Row className="enabled-row">
                                        <Col xs={2} lg={1} className="d-none d-lg-block">
                                            <span className="pink"><i class="fa-solid fa-cake-candles"></i>{" "}</span>
                                        </Col>
                                        <Col xs={10} lg={9}>
                                            <Form.Control type="date" value={getBirthday} onChange={(e) => setGetBirthday(e.target.value)} onKeyPress={(e) => {event.key == "Enter" ? setBirthday(getBirthday):""} }/>
                                        </Col>
                                        {/*<Col xs={2} lg={1}>
                                            <button type="submit" className="btn-form" onClick={() => setBirthday(getBirthday)}><i class="fa fa-save"></i></button>
                                    </Col>*/}
                                    </Row>)
                                    :
                                    (<Row className="d-flex disabled-row align-items-center" >
                                        <Col xs={10} lg={10}>
                                            <h5>
                                            <span className="pink pe-3"><i class="fa-solid fa-cake-candles"></i></span>
                                                {birthDate}
                                            </h5>
                                        </Col>
                                        {/*<Col xs={2} lg={2} className="d-block d-lg-none">
                                            <button type="submit" className="btn-form d-block d-lg-none" ><i class="fa fa-edit" onClick={() => setBirthday("")}></i></button>
                                        </Col>*/}
                                    </Row>)}
                                </Form.Group>
                            </Row>
                        </Col>
                        <Col xs={12} lg={12}>
                            <Row className="py-2 align-items-center profile border">
                                <Form.Group controlId="Password">
                                    {password == "" ? 
                                    (<Row className="enabled-row">
                                        <Col xs={2} lg={1} className="d-none d-lg-block">
                                            <span className="blue"><i class="fa-solid fa-key"></i>{" "}</span>
                                        </Col>
                                        <Col xs={10} lg={9}>
                                            <Form.Control type="password" value={getPassword} onChange={(e) => setGetPassword(e.target.value)} onKeyPress={(e) => {event.key == "Enter" ? setPassword(getPassword):""} }/>
                                        </Col>
                                        {/*<Col xs={2} lg={1}>
                                            <button type="submit" className="btn-form" onClick={() => setPassword(getPassword)}><i class="fa fa-save"></i></button>
                                    </Col>*/}
                                    </Row>)
                                    :
                                    (<Row className="d-flex disabled-row align-items-center" >
                                        <Col xs={10} lg={10}>
                                            <h5>
                                            <span className="blue pe-3"><i class="fa-solid fa-key"></i></span>
                                                HIDDEN
                                            </h5>
                                        </Col>
                                        {/*<Col xs={2} lg={2} className="d-block d-lg-none">
                                            <button type="submit" className="btn-form d-block d-lg-none" ><i class="fa fa-edit" onClick={() => setPassword("")}></i></button>
                                        </Col>*/}
                                    </Row>)}
                                </Form.Group>
                            </Row>
                        </Col>
                        <Col xs={12} lg={12}>
                            <Row className="py-2 d-flex align-items-center profile border disabled-row align-items-center">
                                <Col xs={10} lg={10}>
                                    <h5>
                                        <span className="pink pe-3"><i class="fa-solid fa-envelope"></i></span>
                                        {email}
                                    </h5>
                                </Col>
                                    <Col xs={2} lg={2}>
                                        
                                    </Col>
                                </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Col>
        
           
        
              
            
        </>
    )
};

export default UserProfile