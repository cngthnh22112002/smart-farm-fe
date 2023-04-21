import Navbar from "D:/DADN-HTTT/FrontEnd/smartfarmfe/src/Component/Navbar.js"
import Footer from "D:/DADN-HTTT/FrontEnd/smartfarmfe/src/Component/Footer.js"
import Header from "D:/DADN-HTTT/FrontEnd/smartfarmfe/src/Component/Header.js"
import Homepage from "D:/DADN-HTTT/FrontEnd/smartfarmfe/src/pages/homepage/Homepage.js"
import Fan from "D:/DADN-HTTT/FrontEnd/smartfarmfe/src/pages/Fan/Fan.js"
import Light from "D:/DADN-HTTT/FrontEnd/smartfarmfe/src/pages/Light/Light.js"
import Pump from "D:/DADN-HTTT/FrontEnd/smartfarmfe/src/pages/Pump/Pump.js"
import Growth from "D:/DADN-HTTT/FrontEnd/smartfarmfe/src/pages/Growth/Growth.js"
import Profile from "D:/DADN-HTTT/FrontEnd/smartfarmfe/src/pages/profile/profile.js"
import Notify from "D:/DADN-HTTT/FrontEnd/smartfarmfe/src/pages/Notification/Notification.js"
import { ChartDayly } from "D:/DADN-HTTT/FrontEnd/smartfarmfe/src/pages/Chart/chartdayly.js"
import { ChartWeekly } from "D:/DADN-HTTT/FrontEnd/smartfarmfe/src/pages/Chart/chartweekly.js"
import { ChartAll } from "D:/DADN-HTTT/FrontEnd/smartfarmfe/src/pages/Chart/chartall.js"
import 'D:/DADN-HTTT/FrontEnd/smartfarmfe/src/App.css';
import "D:/DADN-HTTT/FrontEnd/smartfarmfe/src/Component/styles.css"
import React from "react"
import {  BrowserRouter, Route, Routes } from "react-router-dom"
function Home() {
  return (
    <>
        <div className="body">
            <Navbar />
            <div className="container">
            <Header />
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/light" element={<Light />} />
                <Route path="/fan" element={<Fan />} />
                <Route path="/pump" element={<Pump />} />
                <Route path="/chart/dayly" element={<ChartDayly />}></Route>
                <Route path="/chart/weekly" element={<ChartWeekly />}></Route>
                <Route path="/chart/all" element={<ChartAll />}></Route>
                <Route path="/growth" element={<Growth />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/notify" element={<Notify />} />
            </Routes>
            </div> 
        </div>
       <Footer />
     </>
  );
}

export default Home