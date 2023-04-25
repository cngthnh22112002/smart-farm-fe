import Navbar from "../Navbar"
import Footer from "../Footer.js"
import Header from "../Header.js"
import Homepage from "../../pages/homepage/Homepage.js"
import Fan from "../../pages/Fan/Fan.js"
import Light from "../../pages/Light/Light.js"
import Pump from "../../pages/Pump/Pump"
import Growth from "../../pages/Growth/Growth.js"
import Profile from "../../pages/profile/profile.js"
import Notify from "../../Component/Notification/Notification.js"
import { ChartDayly } from "../../pages/Chart/chartdayly.js"
import { ChartWeekly } from "../../pages/Chart/chartweekly.js"
import { ChartAll } from "../../pages/Chart/chartall.js"
import Chat from "../../pages/Chat/Chat"
import '../../App.css';
import "../../Component/styles.css"
import React from "react"
import {  BrowserRouter, Route, Routes } from "react-router-dom"
import { NavLink, useNavigate } from 'react-router-dom';
function Home() {
  return (
    <>
      <div className="body">
        <Navbar />
        <div className="container">
          <div className="icon1" style={{marginBottom: '5px'}}>
            <i className="bi bi-question-circle" />
            <i className="bi bi-gear" />
            <i className="bi bi-bell" />
            <h6>Hello, User</h6>
            <NavLink to="/profile">
              <i className="bi bi-person" style={{ fontSize: "110%" }} />
            </NavLink>
          </div>
          {/* <div>
            WELCOME MY FARM!
          </div> */}
          <Routes>
            <Route path="/homepage" element={<Homepage />} />
            <Route path="/light" element={<Light />} />
            <Route path="/fan" element={<Fan />} />
            <Route path="/pump" element={<Pump />} />
            <Route path="/chart/dayly" element={<ChartDayly />}></Route>
            <Route path="/chart/weekly" element={<ChartWeekly />}></Route>
            <Route path="/chart/all" element={<ChartAll />}></Route>
            <Route path="/growth" element={<Growth />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/notify" element={<Notify  />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home