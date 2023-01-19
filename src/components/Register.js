import { useState } from "react";
import { useHistory  } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import registerImg from "../assets/img/contact-img.svg";
import 'animate.css';
import axios from "axios";
import TrackVisibility from 'react-on-screen';

export const Register = () => {
  const history = useHistory()
  const formInitialDetails = {
    first_name: '',
    last_name: '',
    password: '',
    email: '',
    phone_number: '',
    lokasi_praktik: '',
    lokasiPraktik1: '',
    lokasiPraktik2: '',
    nomor_str:''
  }
  const baseUrl = 'http://20.231.66.68'
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Register');
  const [isError, setIsError] = useState(false)
  const [error, setError] = useState("error: ")
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
      setFormDetails({
        ...formDetails,
        [category]: value
      })
  }

  const UserErrorMessage = (props) => {
    return <p style={{ color: "red"}}>{error}</p>;
  }
  const GuestErrorMessage = (props) => {
    return <h1></h1>;
  }
  
  const ErrorMessage = (props) =>  {
    const isError2 = props.isError2;
    if (isError2) {
      return <UserErrorMessage />;
    }
    return <GuestErrorMessage />;
  }


  const handleSubmit = async (e) => {
    setButtonText("Sending...");
    e.preventDefault();
    try{
      const res = await axios.post(`${baseUrl}/sign_up`, formDetails)
      localStorage.setItem("token", res.data.token)
      setFormDetails(formInitialDetails)
      history.push("/home")
      console.log(res)
    }
    catch(err){
      setIsError(true)
      setError(err.response.data.Message)
      setButtonText("Login")
      setTimeout(() => {
        setIsError(false)
        setError('')
      }, 2000)
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
                      <input type="text" value={formDetails.first_name} placeholder="First Name" onChange={(e) => onFormUpdate('first_name', e.target.value)} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" value={formDetails.last_name} placeholder="Last Name" onChange={(e) => onFormUpdate('last_name', e.target.value)}/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="tel" value={formDetails.phone_number} placeholder="Phone No." onChange={(e) => onFormUpdate('phone_number', e.target.value)}/>
                    </Col>
                    <Col size={12} sm={12} className="px-1">
                      <input type="text" value={formDetails.lokasi_praktik} placeholder="Lokasi Praktik (Prov)" onChange={(e) => onFormUpdate('lokasi_praktik', e.target.value)}/>
                    </Col>
                    <Col size={12} sm={12} className="px-1">
                        <input type="text" value={formDetails.lokasiPraktik1} placeholder="Lokasi Praktik (Kota)" onChange={(e) => onFormUpdate('lokasiPraktik1', e.target.value)}/>
                    </Col>
                    <Col size={12} sm={12} className="px-1">
                        <input type="text" value={formDetails.lokasiPraktik2} placeholder="Lokasi Praktik (RS)" onChange={(e) => onFormUpdate('lokasiPraktik2', e.target.value)}/>
                    </Col>
                    <Col size={12} sm={12} className="px-1">
                        <input type="text" value={formDetails.nomor_str} placeholder="No STR" onChange={(e) => onFormUpdate('nomor_str', e.target.value)} />
                    </Col>
                    <Row size={12} className="px-1">
                      <ErrorMessage isError2= {isError} />
                    </Row>              
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
