import { useState } from "react";
import { useHistory  } from "react-router-dom";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import loginImg from "../assets/img/contact-img2.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import swal from 'sweetalert';




export const Login = () => {
  const history = useHistory()
  const formInitialDetails = {
    email: '',
    password: ''
  }
  const baseUrl = 'http://20.231.66.68'
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [login, setLogin] = useState(false)
  const [isError, setIsError] = useState(false)
  const [error, setError] = useState("error: ")
  const isLogin = () => setLogin(login)
  const [buttonText, setButtonText] = useState('Login');
  const [status, setStatus] = useState({});


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

  const onFormUpdate = (category, value) => {
      setFormDetails({
        ...formDetails,
        [category]: value
      })
  }

  const handleSubmit = async (e) => {
    setButtonText("Sending...");
    e.preventDefault();
    try{
      const res = await axios.post(`${baseUrl}/login`, formDetails)
      localStorage.setItem("token", res.data.token)
      setFormDetails(formInitialDetails)
      setLogin(true)
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
    <section className="login" id="login">
      <Container>
        <Row className="align-items-center"> 
        <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                  <Row>
                    <Row size={12} sm={6} className="px-1">
                      <input type="text" value={formDetails.email} placeholder="Email" onChange={(e) => onFormUpdate('email', e.target.value)} />
                    </Row>
                    <Row size={12} className="px-1">
                      <input type="password" value={formDetails.password} placeholder="Password" onChange={(e) => onFormUpdate('password', e.target.value)}/>
                    </Row>
                    <Row size={12} className="px-1">
                      <ErrorMessage isError2= {isError} />
                    </Row>
                    < Row>
                      <button type="submit"><span>{buttonText}</span></button>
                    </Row>
                    < Row>
                    <p>Belum punya akun? <a href="/register">Yuk daftar dulu</a></p>
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
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={loginImg} alt="Login"/>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
