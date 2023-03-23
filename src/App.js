import Navbar from "./Navbar"
import Homepage from "./pages/Homepage"
import Fan from "./pages/Fan"
import Light from "./pages/Light"
import Pump from "./pages/Pump"
import Chart from "./pages/Chart"
import Growth from "./pages/Growth"
import Chat from "./pages/Chat"
import './App.css';
import "./styles.css"

import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <header>
        <div className="header">
          <div className="logo">
            <img src="logoyolofarm.png" alt="logo"/>
            <h1>Yolo Farm</h1>
          </div>
          <div className="icon1">
            <i className="bi bi-question-circle" />
            <i className="bi bi-gear" />
            <i className="bi bi-bell" />
            <h6>Hello, User</h6>
            <i className="bi bi-person" style={{ fontSize: "110%" }} />
          </div>
        </div>
      </header>
      <div className="body">
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/homepage" element={<Homepage />} />
            <Route path="/light" element={<Light />} />
            <Route path="/fan" element={<Fan />} />
            <Route path="/pump" element={<Pump />} />
            <Route path="/chart" element={<Chart />} />
            <Route path="/growth" element={<Growth />} />
            <Route path="/chat" element={<Chat />} />
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App