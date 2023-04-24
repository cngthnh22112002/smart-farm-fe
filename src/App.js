import { NavLink, useNavigate, Router } from 'react-router-dom';
import Login from "./Component/Login/Login"
// import Register from "./Component/Register/Register"
import ProtectedRoutes from "./Component/ProtectedRoutes.js"
// import ProtectedRoute from "./utils/ProtectedRoute"
import React from "react"
import Home from "./Component/Home/Home"
import {  BrowserRouter, Route, Routes } from "react-router-dom"
import {Navigate} from "react-router"
import Navbar from "./Component/Navbar"
import Footer from "./Component/Footer"
import Homepage from "./pages/homepage/Homepage"
import Fan from "./pages/Fan/Fan"
import Light from "./pages/Light/Light"
import Pump from "./pages/Pump/Pump"
// import Chart from "./pages/Chart/Chart"
import Growth from "./pages/Growth/Growth"
import Profile from "./pages/profile/profile"
import { ChartDayly } from "./pages/Chart/chartdayly"
import { ChartWeekly } from "./pages/Chart/chartweekly"
import { ChartAll } from "./pages/Chart/chartall"
import Register from './Component/Register/Register';
import Notify from './Component/Notification/Notify';
import NotifyToday from './Component/Notification/NotifyToday';
import NotifyAll from './Component/Notification/NotifyAll';
import './App.css';
import "./Component/styles.css"
// import { NavLink, useNavigate } from 'react-router-dom';

function App() {
  return (
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route element = {<ProtectedRoutes/>}> 
                <Route path="/home" element={<Home />} />
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
                <Route path="/notify/all" element={<NotifyAll  />} />
                <Route path="/notify/today" element={<NotifyToday  />} />
          </Route>
        </Routes>
      </div>
  );
}

export default App