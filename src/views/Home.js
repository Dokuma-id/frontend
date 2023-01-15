import logo from '../logo.svg';
import '../App.css';
import { NavBar } from "../components/NavBar";
import { Banner } from "../components/Banner";
import { Layanan } from "../components/Layanan";
import { Projects } from "../components/Projects";
import { Login } from "../components/Login";
import { Register } from "../components/Register";
import { Footer } from "../components/Footer";
import { BrowserRouter as Router, Switch, Routes, Route, Redirect,} from "react-router-dom";
/**
 * home = "/home"
 * diagnosa = "/diagnosa"
 */

export const Home = () => {

  return (
    <div className="App">
      <Banner/>
      <Layanan />
      <Projects />
    </div>
  );
}

export default Home;
