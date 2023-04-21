import Navbar from "./Component/Navbar"
import Footer from "./Component/Footer"
import Homepage from "./pages/homepage/Homepage"
import Fan from "./pages/Fan/Fan"
import Light from "./pages/Light/Light"
import Pump from "./pages/Pump/Pump"
import Chart from "./pages/Chart/Chart"
import Growth from "./pages/Growth/Growth"
import Chat from "./pages/Chat/Chat"
import Notify from "./pages/Notification/Notification"
import Profile from "./pages/profile/profile"
import { ChartDayly } from "./pages/Chart/chartdayly"
import { ChartWeekly } from "./pages/Chart/chartweekly"
import { ChartAll } from "./pages/Chart/chartall"
import './App.css';
import "./Component/styles.css"

import React from "react"
import { Route, Routes } from "react-router-dom"
import Header from "./Component/Header"

function App() {
  return (
    <>
      <div className="body">
        <Navbar />
        <div className="container">
          {/* <div className="icon1" style={{marginBottom: '5px', background: "grey"}}>
            <i className="bi bi-question-circle" />
            <i className="bi bi-gear" />
            <NavLink to="/notify">
              <i className="bi bi-bell" style={{color: "black"}} />
            </NavLink> *
            <h6>Hello, User</h6>
            <NavLink to="/profile">
              <i className="bi bi-person" style={{ fontSize: "110%", color:"black" }} />
            </NavLink>
          </div> */}
          <Header/>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/light" element={<Light />} />
            <Route path="/fan" element={<Fan />} />
            <Route path="/pump" element={<Pump />} />
            <Route path="/chart/dayly" element={<ChartDayly />}></Route>
            <Route path="/chart/weekly" element={<ChartWeekly />}></Route>
            <Route path="/chart/all" element={<ChartAll />}></Route>
            <Route path="/growth" element={<Growth />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/notify" element={<Notify/>} /> 
            <Route path="/profile" element={<Profile />} />
          </Routes>
          
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App