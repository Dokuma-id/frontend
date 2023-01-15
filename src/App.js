import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Login } from "./components/Login";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { BrowserRouter as Router, Switch, Routes, Route, Redirect,} from "react-router-dom";
import { Diagnosa } from "./components/Diagnosa";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Login />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
