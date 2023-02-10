import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { NavBar } from "./NavBar";

export const Projects = () => {
  return (
    <div className="App">
      <NavBar/>
      <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>About</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">FAQ</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tes</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tes</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        <p><strong>Apakah penyakitnya akan lengkap?</strong></p>
                        <p >Target awal kami 20 penyakit tersering di FKTP (puskesmas/klinik), lalu bertahap menambahkan penyakit-penyakit kompetensi 4 untuk dokter umum, baru penyakit-penyakit lainnya.</p>
                        
                      </Row>
                      <Row>
                      <p><strong>Apakah bisa terintegrasi dengan rekam medis online yang sudah ada di FKTP (puskesmas/klinik)?</strong></p>
                      <p>
                        Saat ini belum karena mengintegrasi dengan pihak lain membutuhkan waktu dan proses yang lebih lama. Saat ini Dokter perlu mengisi secara manual data yang dibutuhkan.
                      </p>
                      </Row>
                      <Row>
                      <p><strong>Mengapa data hamil, pengobatan saat ini, dan alergi harus diisi?</strong></p>
                      <p>
                        Dokuma mengutamakan tata laksana komprehensif yang personalized/terindividualisasi. Data tersebut akan berpengaruh terhadap rekomendasi tata laksana yang akan dimunculkan.
                      </p>
                      </Row>
                      <Row>
                      <p><strong>Apakah data pasien dapat disimpan? </strong></p>
                      <p>
                        Saat ini belum karena kami akan menghadapi isu etik terkait kerahasiaan data pasien. Namun kami akan berusaha mencarikan solusinya supaya pasien dengan penyakit kronis dapat dimasukkan datanya, sehingga follow up menjadi lebih mudah.
                      </p>
                      </Row>
                      <Row>
                      <p><strong>Apakah obat-obatan yang dituliskan sudah lengkap? </strong></p>
                      <p>
                        Kami hanya memasukkan obat-obatan yang tersedia di FKTP (puskesmas/klinik) berdasarkan Formularium Nasional Kementerian Kesehatan RI tahun 2019. 
                      </p>
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
    </div>
    
  )
}
