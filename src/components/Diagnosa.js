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
                      <select id="favColor" class="jenisKelamin" value={formDetails.jenisKelamin} placeholder="Jenis Kelamin" onChange={(e) => onFormUpdate('jenisKelamin', e.target.value)}>
                        <option value="">Jenis Kelamin</option>
                        <option value="True">Pria</option>
                        <option value="False">Wanita</option>
                      </select>
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
                        <select id="favColor" value={formDetails.stresMetabolik} placeholder="Stres Metabolik (dalam kg)" onChange={(e) => onFormUpdate('stresMetabolik', e.target.value)} >
                          <option value="">Stres Metabolik</option>
                          <option value="0">Tidak ada</option>
                          <option value="1">Trauma ringan</option>
                          <option value="2">Operasi ringan, trauma sedang</option>
                          <option value="3">Sepsis, operasi besar, trauma berat</option>
                        </select>
                      </Col>
                    </Row>
                    <Row size={12} sm={6} className="px-1">
                      <Col size={12} sm={6} className="px-1">
                        <p>Hamil</p>
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <select id="favColor"  value={formDetails.hamil} placeholder="Hamil?" onChange={(e) => onFormUpdate('hamil', e.target.value)}>
                          <option value="">Hamil?</option>
                          <option value="True">Ya</option>
                          <option value="False">Tidak</option>
                      </select>
                      </Col>
                    </Row>
                    <Row size={12} sm={6} className="px-1">
                      <Col size={12} sm={6} className="px-1">
                        <p>Merokok</p>
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <select id="favColor"  value={formDetails.merokok} placeholder="Merokok?" onChange={(e) => onFormUpdate('merokok', e.target.value)}>
                          <option value="">Merokok atau Sering Terpapar Rokok?</option>
                          <option value="True">Ya</option>
                          <option value="False">Tidak</option>
                        </select>
                      </Col>
                    </Row>
                    <Row size={12} sm={6} className="px-1">
                      <Col size={12} sm={6} className="px-1">
                        <p>Alkohol</p>
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <select id="favColor"  value={formDetails.alkohol} placeholder="Alkohol" onChange={(e) => onFormUpdate('alkohol', e.target.value)}>
                          <option value="">Alkohol?</option>
                          <option value="True">Ya</option>
                          <option value="False">Tidak</option>
                        </select>
                      </Col>
                    </Row>
                    <Row size={12} sm={6} className="px-1">
                      <Col size={12} sm={6} className="px-1">
                        <p>Pekerjaan</p>
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                      <select id="favColor"  value={formDetails.pekerjaan} placeholder="Pekerjaan" onChange={(e) => onFormUpdate('pekerjaan', e.target.value)}>
                        <option value="">Tingkat Aktivitas</option>
                        <option value="1">Istirahat (tirah baring)</option>
                        <option value="2">Aktivitas ringan (IRT, pegawai kantor, guru)</option>
                        <option value="3">Aktivitas sedang (pegawai industri ringan, mahasiswa, militer yang sedang
                            tidak perang)</option>
                        <option value="4">Aktivitas berat (petani, buruh, atlet, militer dalam keadaan latihan)</option>
                        <option value="5">Aktivitas sangat berat (tukang becak, tukang gali)</option>
                        </select>
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
                        <select id="favColor" value={formDetails.alergi} placeholder="Alergi" onChange={(e) => onFormUpdate('alergi', e.target.value)} >
                          <option value="">Alergi</option>
                          <option value="">Tidak Ada</option>
                          <option value="Paracetamol">Paracetamol</option>
                          <option value="Ibuprofen">Ibuprofen</option>
                          <option value="Kacang">Kacang</option>
                          <option value="Aspirin">Aspirin</option>
                          <option value="Penisilin">Penisilin, Penicillin</option>
                          <option value="Susu sapi">Susu sapi</option>
                          <option value="Telur">Telur</option>
                          <option value="Kerang">Kerang</option>
                          <option value="Gandum">Gandum</option>
                          <option value="Kecoak">Kecoak</option>
                          <option value="Pewarna">Pewarna</option>
                          <option value="Logam">Logam</option>
                          <option value="Parfum">Parfum</option>
                          <option value="Karet">Karet</option>
                          <option value="Lateks">Lateks</option>
                          <option value="Sengatan lebah">Sengatan lebah</option>
                          <option value="Spora jamur">Spora jamur</option>
                          <option value="Tungau debu rumah">Tungau debu rumah, house dust mite</option>
                          <option value="Pollen">Serbuk sari, Pollen</option>
                          <option value="Ikan">Ikan</option>
                          <option value="Kedelai">Kedelai</option>
                          <option value="Sefalosporin">Sefalosporin/Cephalosporin</option>
                          <option value="NSAID">Nonsteroid Antiinflammatory Drugs, NSAID, Obat anti inflamasi nonsteroid
                              OAINS</option>
                          <option value="Lidokain">Lidocaine, Lidokain</option>
                          <option value="Antikejang">Antikejang, Antiseizure</option>
                          <option value="Metformin">Metformin</option>
                          <option value="Glibenklamid">Glibenklamid, Glibenclamide</option>
                          <option value="Glimepiride">Glimepiride</option>
                          <option value="Glipizid">Glipizid</option>
                          <option value="Rifampisin">Rifampisin, Rifampicin</option>
                          <option value="Isoniazid">Isoniazid</option>
                          <option value="Pirazinamid">Pirazinamid</option>
                          <option value="Etambutol">Etambutol, Ethambutol</option>
                          <option value="Hidroklorotiazid">Hidroklorotiazid, Hydrochlorothiazide</option>
                          <option value="Kaptopril">Kaptopril, Captopril </option>
                          <option value="Amlodipine">Amlodipine</option>
                          <option value="Atenolol">Atenolol</option>
                        </select>
                      </Col>
                    </Row>
                    <Row size={12} sm={6} className="px-1">
                      <Col size={12} sm={6} className="px-1">
                        <p>Diagnosis</p>
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <select id="favColor" value={formDetails.diagnosis} placeholder="Diagnosis" onChange={(e) => onFormUpdate('diagnosis', e.target.value)} >
                          <option value="TB">Tuberkulosis paru tanpa komplikasi</option>
                          <option value="HP">Hipertensi esensial</option>
                          <option value="DM">Diabetes melitus tipe 2</option>
                          <option value="Anemia">Anemia</option>
                          <option value="Influenza">Influenza</option>
                          <option value="Faringitis">Faringitis</option>
                          <option value="Pneumonia">Pneumonia</option>
                          <option value="DDR">Diare dehidrasi ringan</option>
                          <option value="DTR">Diare tanpa dehidrasi</option>
                          <option value="HeadacheAkut">Headache Akut</option>
                          <option value="HeadacheKronik">Headache Kronik</option>
                          <option value="Migrain">Migrain</option>
                        </select>
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
