import './App.css';
import React from 'react';
import { AuthProvider } from './context/auth';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from "react-router-dom";
import Routes  from "./routes/Routes";

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
