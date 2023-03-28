import React, { useState, useContext } from "react";
import { AuthContext } from "../context/auth";
import {Container } from "react-bootstrap";
import axios from "axios";
import Input from "../components/Input";
import Home from "./Home";
import { NavBar } from "../components/NavBar";
const baseUrl = "http://20.169.198.254/"

const Auth = () => {
    const {isAuth, loginSuccess, loginFailed} = useContext(AuthContext)
    const [login, setLogin] = useState(true)
    const [email, setEmail] = useState("")
    const [isError, setIsError] = useState(false)
    const [error, setError] = useState("error: ")
    const [password, setPassword] = useState("")
    const [first_name, setFirstName] = useState("")
    const [last_name, setLastName] = useState("")
    const [phone_number, setPhone] = useState("")
    const [lokasi_praktik, setLokasi] = useState("")
    const [buttonText, setButtonText] = useState('Login');
    const [nomor_str, setStr] = useState("")
    const isLogin = () => {
        setLogin(!login)
        if (login) {
            setButtonText("Register")
        } else {
            setButtonText("Login")
        }
    }
    
    if(isAuth){
        return(
            <Home/>
        )
    }

    const handleSubmit = async (e) => {
        setButtonText("Loading...");
        e.preventDefault();
        if (login) {
            console.log("coba ya")
            const user = {
                email, password
            }
            console.log(user)
            try{
                const res = await axios.post(`${baseUrl}login/`, user)
                localStorage.setItem("token", res.data.token)
                setEmail("")
                setPassword("")
                console.log(res)
                setButtonText("Login")
                loginSuccess()
            }
            catch(err){
                setButtonText("Try again")
                setIsError(true)
                setError(err.response.data.Message)
                console.log(err.response.data)
                console.log(error)
                setTimeout(() => {
                    setIsError(false)
                    setError("")
                }, 2000)
                loginFailed()
            }
        } else {
            const user = {
                first_name, last_name, password, email, phone_number, lokasi_praktik, nomor_str
            }
            try{
                const res = await axios.post(`${baseUrl}sign_up/`, user)
                localStorage.setItem("token", res.data.token)
                setEmail("")
                setPassword("")
                console.log(res)
                setButtonText("Register")
                loginSuccess()
            }
            catch(err){
                setButtonText("Try again")
                setIsError(true)
                setError(err.response.data.Message)
                setEmail("")
                setPassword("")
                console.log(err.response.data)
                console.log(error)
                setTimeout(() => {
                    setIsError(false)
                    setError("")
                }, 2000)
                loginFailed()
            }
        }
        
        
        
      };


    return (
        <div className="App">
            <NavBar/>
            <div className="login" id="login">
            <Container>
                <h2>{login? "Login": "Register"}</h2>
                <form onSubmit={handleSubmit}>
                    {!login && 
                        <div>
                            <Input type="text" placeholder= "first name" value={first_name} change={(e) => setFirstName(e.target.value)}/>
                            <Input type="text" placeholder= "last name" value={last_name} change={(e) => setLastName(e.target.value)}/>
                            <Input type="tel" placeholder= "phone number" value={phone_number} change={(e) => setPhone(e.target.value)}/>
                            <Input type="text" placeholder= "lokasi praktik" value={lokasi_praktik} change={(e) => setLokasi(e.target.value)}/>
                            <Input type="text" placeholder= "STR number" value={nomor_str} change={(e) => setStr(e.target.value)}/>
                        </div>
                    }
                        <div>
                            <Input type="email" placeholder= "email" value={email} change={(e) => setEmail(e.target.value)}/>
                            <Input type="password" placeholder= "password" value={password} change={(e) => setPassword(e.target.value)}/>
                        </div>

                    { isError && (
                        <div>
                            {error && <p style={{color:"red", margin: "0.4rem 0"}}>{error}</p>}
                        </div>
                    )}

                    <div>
                        <button type="submit"><span>{buttonText}</span></button>
                    </div>
                    
                </form>
                {login? (
                    <>
                    <div id="text" className="text">
                        Belum punya akun? silakan <span onClick={isLogin} style={textBtn}> register </span>
                    </div>
                    </>
                ):(
                    <>
                    <div id="text" className="text">
                        Sudah punya akun? silakan <span onClick={isLogin} style={textBtn}> login </span>
                    </div>
                    </>
                )}
                
            </Container>

        </div>
        </div>
        
    )
}


export default Auth

const textBtn = {
    color : "#3B3B5E",
    fonstSize: "15px",
    cursor: "pointer"
}