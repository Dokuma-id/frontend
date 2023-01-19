import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import registerImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Register = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    no: '',
    lokasiPraktik: '',
    lokasiPraktik1: '',
    lokasiPraktik2: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Register');
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
    let response = await fetch("http://localhost:5000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    });
    setButtonText("Send");
    let result = await response.json();
    setFormDetails(formInitialDetails);
    if (result.code === 200) {
      setStatus({ succes: true, message: 'Message sent successfully'});
    } else {
      setStatus({ succes: false, message: 'Something went wrong, please try again later.'});
    }
  };

  return (
    <section className="register" id="register">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={registerImg} alt="register Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Sign Up</h2>
                <form onSubmit={handleSubmit}>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" value={formDetails.lasttName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)}/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="tel" value={formDetails.phone} placeholder="Phone No." onChange={(e) => onFormUpdate('phone', e.target.value)}/>
                    </Col>
                    <Col size={12} sm={12} className="px-1">
                      <input type="text" value={formDetails.lokasiPraktik} placeholder="Lokasi Praktik (Prov)" onChange={(e) => onFormUpdate('lokasiPraktik', e.target.value)}/>
                    </Col>
                    <Col size={12} sm={12} className="px-1">
                        <input type="text" value={formDetails.lokasiPraktik1} placeholder="Lokasi Praktik (Kota)" onChange={(e) => onFormUpdate('lokasiPraktik1', e.target.value)}/>
                    </Col>
                    <Col size={12} sm={12} className="px-1">
                        <input type="text" value={formDetails.lokasiPraktik2} placeholder="Lokasi Praktik (RS)" onChange={(e) => onFormUpdate('lokasiPraktik2', e.target.value)}/>
                    </Col>
                    <Col size={12} sm={12} className="px-1">
                        <input type="number" value={formDetails.no} placeholder="No STR" onChange={(e) => onFormUpdate('no', e.target.value)} />
                    </Col>
                    <Row>
                    
                    </Row>
                    <Row>
                      
                    </Row>
                    <Row>
                      
                    </Row>
                    <Row>
                      
                    </Row>
                    <Row></Row>
                    
                    
                    
                    
                    <Col size={12} className="px-1">
                    <input type="password" value={formDetails.password} placeholder="Password" onChange={(e) => onFormUpdate('password', e.target.value)}/>
                      <button type="submit"><span>{buttonText}</span></button>
                    </Col>
                    < Row>
                      <h7>Sudah punya akun? <a href="/login">Langsung masuk aja!</a></h7>
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
        </Row>
      </Container>
    </section>
  )
}
