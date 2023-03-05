import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../context/auth";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { NavLink } from 'react-router-dom'
import { Link } from "react-router-dom";
import {Router, Route, useNavigate} from 'react-router-dom';
import { Diagnosa } from "./Diagnosa";
import { HashLink } from 'react-router-hash-link';

export const Banner = () => {
  const {logout, isAuth} = useContext(AuthContext)
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Selamat datang di" ];
  const period = 200;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])


  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(300);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Welcome to our Page</span>
                <h2>{``} <span className="txt-rotate" dataPeriod="100" data-rotate='[ "Selamat datang di" ]'><span className="wrap">{text}</span></span></h2>
                <h1>DOKUMA</h1>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                  {isAuth? (
                    <>
                    <div>
                    <NavLink to="/diagnosa">
                        <button className="vvd"> MULAI <ArrowRightCircle size={45} /></button>
                      </NavLink>
                    </div>
                    </>
                ):(
                    <>
                    <div>
                      <NavLink to="/login">
                        <button className="vvd"> MULAI <ArrowRightCircle size={45} /></button>
                      </NavLink>
                    </div>
                    </>
                )}
                  
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>

        </Row>
      </Container>
    </section>
  )
}
