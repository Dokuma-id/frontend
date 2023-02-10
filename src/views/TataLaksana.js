import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { NavBar } from "../components/NavBar";
import { useHistory } from "react-router-dom";
import { AlignStart } from "react-bootstrap-icons";

export const TataLaksana = () => {
  const history = useHistory();
  const data = history.location.state.data;
  const edukasi = history.location.state.edukasi;
  const farmakologi = history.location.state.farmakologi;
  const nonFarmakologi = history.location.state.nonFarmakologi;
  const referensi = history.location.state.referensi;
  const namaPenyakit = history.location.state.namaPenyakit;
  console.log("nih hasil")
  //console.log(data) - gaperlu?
  console.log(edukasi)
  console.log(farmakologi)
  console.log(nonFarmakologi)
  // console.log(referensi) - done
  //console.log(namaPenyakit) - done

  //numpang taro sini, iterate object
  /**
   * {Object.keys(farmakologi).map((key, index) => {
                        return (
                          <div key={index}>
                            <h2>
                              {key}: {Object.keys(farmakologi[key]).map((key, index) => {
                                return (
                                  <div key={index}>
                                    <h2>
                                      {key}: {(farmakologi[key])[key]}
                                    </h2>

                                    <hr />
                                  </div>
                                );
                              })}
                            </h2>

                            <hr />
                          </div>
                        );
                      })}
   */


  const listPenyakit = namaPenyakit.map((ref) =>
    <p>{ref}</p>
  );
  const listReferensi = referensi.map((ref) =>
    <li>{ref}</li>
  );
  console.log(listReferensi)

  return (
    <div className="App">
      <NavBar/>
      <section className="tataLaksana" id="tataLaksana">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Tata Laksana</h2>
                <ul>
                  {listPenyakit}
                </ul>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Edukasi</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Farmakologi</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Non Farmakologi</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      
                      <div id="isian" className="isian">
                        {edukasi.map((items, index) => {
                            return <li key={"li-" + index}> {items} </li>;
                          })}
                      </div>
                      
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    
                      <p></p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <div id="isian" className="isian">
                        {nonFarmakologi.map((items, index) => {
                            return <li key={"li-" + index}> {items} </li>;
                          })}
                      </div>
                      <p></p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
                <p >Referensi:</p>
                <ul>{listReferensi}</ul>
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
