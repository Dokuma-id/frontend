import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { NavBar } from "../components/NavBar";
import { useHistory } from "react-router-dom";
import { AlignStart, ConeStriped } from "react-bootstrap-icons";

export const TataLaksana = () => {
  const history = useHistory();
  const data = history.location.state.data;
  const edukasi = history.location.state.edukasi;
  const farmakologi = history.location.state.farmakologi;
  const nonFarmakologi = history.location.state.nonFarmakologi;
  const referensi = history.location.state.referensi;
  const namaPenyakit = history.location.state.namaPenyakit;
  console.log("nih hasil");
  console.log(data)
  //console.log(edukasi);
  //console.log(farmakologi); - done
  console.log(nonFarmakologi);
  // console.log(referensi) - done
  //console.log(namaPenyakit) - done
  let edu1 = "";
  let edu2 = "";
  let edu2Gambar = "";
  let edu3 = "";
  let edu3Anak = [];
  let edu4 = "";
  let edu4Anak = [];

  function keysOf(obj) {  
    return Reflect.ownKeys(obj)
  }

  //for (let step = 1; step <= edukasi.size(); step++) {
  for (let step = 0; step < 4; step++) {
    if (step == 0) {
      //console.log("Satu")
      edu1 = edukasi[step];
      //console.log(edu1)
    }
    else if (step == 1) {
      //console.log("Dua")
      edu2 = edukasi[1][0];
      edu2Gambar = edukasi[1][1];
      //console.log(edu2)
      //console.log(edu2Gambar)
    }
    else if (step == 2) {
      //console.log("Tiga")
      edu3 = edukasi[2][0];
      edu3Anak = edukasi[2][1];
      //console.log(edu3)
      //console.log(edu3Anak)
    }
    else if (step == 3) {
      //console.log("Empat")
      edu4 = edukasi[3][0];
      edu4Anak = edukasi[3][1];
      //console.log(edu4)
      //console.log(edu4Anak)
    }
  }
  const keys = keysOf(farmakologi);
  //console.log(keys)
  var pen1 = new Array();
  var pen2 = new Array();
  var pen3 = new Array();

  Object.entries(farmakologi).forEach(([key, value], index) => {
    if(index == 0){
      //console.log(`${index}: ${key} = ${value}`);
      let namaP = `${key}`
      pen1.push(`${key}`);
      //console.log(farmakologi[namaP])
      Object.entries(farmakologi[namaP]).forEach(([key2, value2]) => {  
      //console.log("coba liat penanganannya")
      //console.log(`${key2}: ${value2}`)
      pen1.push(`${key2}`)
      pen1.push(`${value2}`)
    })
    }
    else if (index == 1){
      let namaP = `${key}`
      pen2.push(`${key}`);
      //console.log(farmakologi[namaP])
      Object.entries(farmakologi[namaP]).forEach(([key2, value2]) => {  
      //console.log("coba liat penanganannya")
      //console.log(`${key2}: ${value2}`)
      pen2.push(`${key2}`)
      pen2.push(`${value2}`)
    })

    }
    else{
      let namaP = `${key}`
      pen3.push(`${key}`);
      ///console.log(farmakologi[namaP])
      Object.entries(farmakologi[namaP]).forEach(([key2, value2]) => {  
      //console.log("coba liat penanganannya")
      //console.log(`${key2}: ${value2}`)
      pen3.push(`${key2}`)
      pen3.push(`${value2}`)
    })
    }
  });

  //console.log(pen1)
  //console.log(pen2)
  //console.log(pen3)
  let listNon = new Array();
  for (let step = 0; step < nonFarmakologi.length; step++) {
    if(step == 0 ){
      listNon.push(nonFarmakologi[0])
    }
    else if (step == 1){
      listNon.push(nonFarmakologi[1])
    }
    else if (step == 2){
      listNon.push(nonFarmakologi[2])
    }
    else if (step == 3){
      if(nonFarmakologi[3] == true){
        listNon.push ("benerrr")
      }
      else{
      }
    }
    else if (step == 4){
      listNon.push(nonFarmakologi[4])
    }
    else if (step == 5){
      if(nonFarmakologi[3] == true){
        listNon.push ("bener")
      }
      else{
      }
    }
    else if (step == 6){
      listNon.push(nonFarmakologi[6][0])
      for (let i = 0; i <= nonFarmakologi[6].length; i++){
        listNon.push(nonFarmakologi[6][1][i])
      }
    }
    else if (step == 7){
      for (let i = 0; i <nonFarmakologi[7].length; i++){
        listNon.push(nonFarmakologi[7][i])
      }
    }
  }

  console.log(listNon)

  const listPenyakit = namaPenyakit.map((ref) =>
    <p>{ref}</p>
  );
  const listReferensi = referensi.map((ref) =>
    <li>{ref}</li>
  );
  //console.log(listReferensi)

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
                        <ul>
                          <strong>{edu1}</strong>
                        </ul>
                        <ul>
                        <strong>{edu2}</strong> <br></br>
                          <img src={edu2Gambar}></img>
                        </ul>
                        <ul>
                        <strong>{edu3}</strong>
                          {edu3Anak.map((items, index) => {
                            return <li key={"li-" + index}> {items} </li>;
                          })}
                        </ul>
                        <ul>
                        <strong>{edu4}</strong>
                          {edu4Anak.map((items, index) => {
                            return <li key={"li-" + index}> {items} </li>;
                          })}
                        </ul>
                      </div>
                      
                    
                      
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    {pen1.length > 0 &&
                      <div id="obat" className="obat">
                      {pen1.map((items, index) => {
                          if(index === 0){
                            return <strong>{items}</strong>
                          }
                          return <li key={"li-" + index}> {items} </li>;
                        })}
                    </div>
                    }
                    {pen2.length > 0 &&
                      <div id="obat" className="obat">
                      {pen2.map((items, index) => {
                          if(index === 0){
                            <strong>{items}</strong>
                          }
                          return <li key={"li-" + index}> {items} </li>;
                        })}
                    </div>
                    }
                    {pen3.length > 0 &&
                      <div id="obat" className="obat">
                      {pen3.map((items, index) => {
                          if(index === 0){
                            <strong>{items}</strong>
                          }
                          return <li key={"li-" + index}> {items} </li>;
                        })}
                    </div>
                    }
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <div id="isian" className="isian">
                        {listNon.map((items, index) => {
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
