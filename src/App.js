import Navbar from "./Navbar"
import Homepage from "./pages/Homepage/Homepage.js"
// import Fan from "./pages/Fan/Fan.js"
import Light from "./pages/Light/Light.js"
import Pump from "./pages/Pump/Pump.js"
import Chart from "./pages/Chart/Chart.js"
import Growth from "./pages/Growth/Growth.js"
import Chat from "./components/chat/Chat.js"
import Login from "./components/LoginUser/Login.js"
import Register from "./components/Register/Register" 
import Footer from "./pages/footer"
import Change from "./components/changePassword/ChangePassword"
import Header from "./components/Navbar/Navbar"
import './App.css';
import "./styles.css"

import React from "react"
import { Route, Routes } from "react-router-dom"

function App() {
  // const { user } = null;
  return (
    <>
      {/* <header>
        <div className="header" style={{ backgroundColor: "#FBEAAB" }}>
          <div className="logo">
            <img src="logoyolofarm.png" alt="logo"/>
            <h1>Yolo Farm</h1>
          </div>
          <div className="icon1">
            <i className="bi bi-question-circle" />
            <i className="bi bi-gear" />
            <i className="bi bi-bell"/>
            <h6>Hello, User</h6>
            <i className="bi bi-person" style={{ fontSize: "110%" }} />
          </div>
        </div>
      </header> */}
      <Header />
      <div className="body">
        <Navbar />
        <div className="container">
          <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/homepage" element={<Homepage />} />
              <Route path="/light" element={<Light />} />
              {/* <Route path="/fan" element={<Fan />} /> */}
              <Route path="/pump" element={<Pump />} />
              <Route path="/chart" element={<Chart />} />
              <Route path="/growth" element={<Growth />} />
              <Route path="/chat" element={<Chat />} /> 
              <Route path="/login" element={<Login />} /> 
              <Route path="/register" element={<Register />} /> 
              <Route path="/change" element={<Change />} />
              
          </Routes>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App