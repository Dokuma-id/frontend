import logo from './logo.svg';
import './App.css';
import React, {useContext} from 'react';
import { AuthProvider } from './context/auth';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Layanan } from "./components/Layanan";
import { Projects } from "./components/Projects";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { Footer } from "./components/Footer";
import { BrowserRouter } from "react-router-dom";
import { Diagnosa } from "./components/Diagnosa";
import { Home } from "./views/Home";
import { TataLaksana } from "./views/TataLaksana";
import Routes  from "./routes/Routes";

/**
 * home = "/home"
 * diagnosa = "/diagnosa"
 */

/**function App() {
  return (
    <div className="App">
      <NavBar />
      <Route path="/" exact component={Home}/>
      <Route path="/home" exact component={Home}/>
      <Route path="/diagnosa" exact component={Diagnosa}/>
      <Route path="/tata-laksana" exact component={TataLaksana}/>
      <Route path="/login" exact component={Login}/>
      <Route path="/register" exact component={Register}/>
      <Footer />
    </div>
  );
}**/

const App = () => {
  return(
    <BrowserRouter>
      <AuthProvider>
        <Routes/>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
