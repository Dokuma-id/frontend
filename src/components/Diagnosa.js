import React from "react";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img2.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { BrowserRouter as Router, Switch, 
    Route, Redirect,} from "react-router-dom";

export const Diagnosa = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Diagnosa');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
      setFormDetails({
        ...formDetails,
        [category]: value
      })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    let response = await fetch("http://localhost:3000/diagnosa", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    });
    setButtonText("Send");
    let result = await response.json();
    setFormDetails(formInitialDetails);
    if (result.code == 200) {
      setStatus({ succes: true, message: 'Message sent successfully'});
    } else {
      setStatus({ succes: false, message: 'Something went wrong, please try again later.'});
    }
  };

  return (
    <section className="contact" id="diagnosa">
      <Container>
        <Row className="align-items-center"> 
        <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Diagnosa</h2>
                <form onSubmit={handleSubmit}>
                  <Row>
                    <Row size={12} sm={6} className="px-1">
                      <input type="text" value={formDetails.firstName} placeholder="Username" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                    </Row>
                    <Row size={12} className="px-1">
                      <input type="password" value={formDetails.password} placeholder="Password" onChange={(e) => onFormUpdate('password', e.target.value)}/>
                    </Row>
                    < Row>
                      <button type="submit"><span>{buttonText}</span></button>
                    </Row>
                    < Row>
                    <p>Belum punya akun? <a href="#register">Yuk daftar dulu</a></p>
                    </Row>
                    {
                      status.message &&
                      <Col>
                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                      </Col>
                    }
                  </Row>
                </form>
              </div>}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
