import Navbar from "./../Navbar.js"
import Footer from "./../Footer"
import Homepage from "../../pages/homepage/Homepage.js"
import Fan from "../../pages/Fan/Fan.js"
import Light from "../../pages/Light/Light.js"
import Pump from "../../pages/Pump/Pump"
import Growth from "../../pages/Growth/Growth"
import Profile from "../../pages/profile/profile"
import Notify from "../Notification/Notify"
import NotifyToday from "../Notification/NotifyToday.js"
import NotifyAll from "../Notification/NotifyAll.js"
import { ChartDayly } from "../../pages/Chart/chartdayly.js"
import { ChartWeekly } from "../../pages/Chart/chartweekly.js"
import { ChartAll } from "../../pages/Chart/chartall.js"
import './../../App.css';
import "./../styles.css"
import React, {useEffect, useState} from "react"
import {  BrowserRouter, Route, Routes } from "react-router-dom"
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
const Home = () => {

  const [data, setData] = useState([]);
  const [token, setToken] = useState('');
  useEffect(() => {
    // Get the token from your authentication system
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0M2QwMzIyNDExYjgwN2ZmMjc3YzY1NCIsImlhdCI6MTY4MjMyNDU2MywiZXhwIjoxNjgyNTgzNzYzfQ.2RRqL8j5FTv0rfmHDcw-4Leqfn1WEjvY4aODBNAKXV4';
    setToken(token);

    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/user', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <div className="body">
        <Navbar />
        <div className="container">
           <div className="icon1" style={{marginBottom: '5px', background: "#33FF33"}}>
            <i className="bi bi-question-circle" />
            <i className="bi bi-gear" />
            <h6>Hello, {data.name}</h6>
            <NavLink to="/profile">
              <i className="bi bi-person" style={{ fontSize: "110%" }} />
            </NavLink>
          </div> 
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
            <Route path="/notify/today" element={<NotifyToday  />} />
            <Route path="/notify/all" element={<NotifyAll  />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home