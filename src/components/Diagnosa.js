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
    jenisKelamin: '',
    umur: '',
    beratBadan: '',
    tinggiBadan: '',
    stresMetabolik: '',
    merokok: '',
    alkohol:'',
    hamil: '',
    pekerjaan: '',
    diagnosis: '',
    alergi: '',
    pengobatanSaatIni: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Tata Laksana');
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
    <section className="diagnosa" id="diagnosa">
      <Container className="cont">
        <Row className="align-items-center"> 
        <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Diagnosa</h2>
                <form onSubmit={handleSubmit}>
                  <Row>
                    <Row size={12} sm={6} className="px-1">
                      <Col size={12} sm={6} className="px-1">
                        <p>Jenis Kelamin</p>
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="text" value={formDetails.jenisKelamin} placeholder="Jenis Kelamin" onChange={(e) => onFormUpdate('jenisKelamin', e.target.value)} />
                      </Col>
                    </Row>
                    <Row size={12} sm={6} className="px-1">
                      <Col size={12} sm={6} className="px-1">
                        <p>Umur</p>
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="number" value={formDetails.umur} placeholder="Umur" onChange={(e) => onFormUpdate('umur', e.target.value)} />
                      </Col>
                    </Row>
                    <Row size={12} sm={6} className="px-1">
                      <Col size={12} sm={6} className="px-1">
                        <p>Tinggi Badan</p>
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="number" value={formDetails.tinggiBadan} placeholder="Tinggi Badan (dalam cm)" onChange={(e) => onFormUpdate('tinggiBadan', e.target.value)} />
                      </Col>
                    </Row>
                    <Row size={12} sm={6} className="px-1">
                      <Col size={12} sm={6} className="px-1">
                        <p>Berat Badan</p>
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="number" value={formDetails.beratBadan} placeholder="Berat Badan (dalam kg)" onChange={(e) => onFormUpdate('beratBadan', e.target.value)} />
                      </Col>
                    </Row>
                    <Row size={12} sm={6} className="px-1">
                      <Col size={12} sm={6} className="px-1">
                        <p>Stres Metabolik</p>
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="text" value={formDetails.stresMetabolik} placeholder="Stres Metabolik (dalam kg)" onChange={(e) => onFormUpdate('stresMetabolik', e.target.value)} />
                      </Col>
                    </Row>
                    <Row size={12} sm={6} className="px-1">
                      <Col size={12} sm={6} className="px-1">
                        <p>Hamil</p>
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="text" value={formDetails.hamil} placeholder="Hamil?" onChange={(e) => onFormUpdate('hamil', e.target.value)} />
                      </Col>
                    </Row>
                    <Row size={12} sm={6} className="px-1">
                      <Col size={12} sm={6} className="px-1">
                        <p>Merokok</p>
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="text" value={formDetails.merokok} placeholder="Merokok?" onChange={(e) => onFormUpdate('merokok', e.target.value)} />
                      </Col>
                    </Row>
                    <Row size={12} sm={6} className="px-1">
                      <Col size={12} sm={6} className="px-1">
                        <p>Alkohol</p>
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="text" value={formDetails.alkohol} placeholder="Alkohol" onChange={(e) => onFormUpdate('alkohol', e.target.value)} />
                      </Col>
                    </Row>
                    <Row size={12} sm={6} className="px-1">
                      <Col size={12} sm={6} className="px-1">
                        <p>Pekerjaan</p>
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="text" value={formDetails.pekerjaan} placeholder="Pekerjaan" onChange={(e) => onFormUpdate('pekerjaan', e.target.value)} />
                      </Col>
                    </Row>
                    <Row size={12} sm={6} className="px-1">
                      <Col size={12} sm={6} className="px-1">
                        <p>Pengobatan Saat Ini</p>
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="text" value={formDetails.pengobatanSaatIni} placeholder="Pengobatan saat ini" onChange={(e) => onFormUpdate('pengobatanSaatIni', e.target.value)} />
                      </Col>
                    </Row>
                    <Row size={12} sm={6} className="px-1">
                      <Col size={12} sm={6} className="px-1">
                        <p>Alergi</p>
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="text" value={formDetails.alergi} placeholder="Alergi" onChange={(e) => onFormUpdate('alergi', e.target.value)} />
                      </Col>
                    </Row>
                    <Row size={12} sm={6} className="px-1">
                      <Col size={12} sm={6} className="px-1">
                        <p>Diagnosis</p>
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="text" value={formDetails.diagnosis} placeholder="Diagnosis" onChange={(e) => onFormUpdate('diagnosis', e.target.value)} />
                      </Col>
                    </Row>
                    < Row>
                      <button type="submit"><span>{buttonText}</span></button>
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
