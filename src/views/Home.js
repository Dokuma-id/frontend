import logo from '../logo.svg';
import '../App.css';
import React, {useState} from 'react';
import { NavBar } from "../components/NavBar";
import { Banner } from "../components/Banner";
import { Layanan } from "../components/Layanan";
import { Projects } from "../components/Projects";
/**
 * home = "/home"
 * diagnosa = "/diagnosa"
 */

export const Home = () => {


  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <Layanan />
      <Projects />
    </div>
  );
}

export default Home;
