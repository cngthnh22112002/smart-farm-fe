import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import './App.css';

const socket = io('http://localhost:5000');

var curDate = new Date();

function App() {
  const [light_sensor, setLightSensor] = useState('');
  const [soilmoisture_sensor, setSoilmoistureSensor] = useState('');
  const [humidity_sensor, setHumiditySensor] = useState('');
  const [temperature_sensor, setTemperatureSensor] = useState('');

  useEffect(() => {
    socket.on('light-sensor', (data) => {
      setLightSensor(data);
    });
    socket.on('soilmoisture-sensor', (data) => {
      setSoilmoistureSensor(data);
    });
    socket.on('humidity-sensor', (data) => {
      setHumiditySensor(data);
    });
    socket.on('temperature-sensor', (data) => {
      setTemperatureSensor(data);
    });
  }, []);

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
  <div className="content">
    <div className="rectangle">
      <div className="navbar">
          <div
            className="ele"
            style={{ backgroundColor: "#a0d5f8", width: "100%", borderRadius:"10%" }}
          >
            <i className="bi bi-house-door-fill" />
            <h6>Home</h6>
          </div>
          <div className="ele">
            <i className="bi bi-lightbulb" />
            <h6>Light</h6>
          </div>
          <div className="ele">
            <i className="bi bi-fan" />
            <h6>Fan</h6>
          </div>
          <div className="ele">
            <i className="fa-sharp fa-regular fa-pump" />
            <h6>Pump</h6>
          </div>
          <div className="ele">
            <i className="bi bi-bar-chart" />
            <h6>Chart</h6>
          </div>
          <div className="ele">
            <i className="bi bi-graph-up" />
            <h6>Growth</h6>
          </div>
          <div className="ele">
            <i className="bi bi-chat-dots" />
            <h6>Chat</h6>
          </div>
      </div>
    </div>
    <div className="content1">
      <div className="title" style={{ marginLeft: 30, height: 50, marginBottom: 30 }}>
        <div style={{ width: "80%", margin: 0 }}>
          <h1>Home Page</h1>
        </div>
        <div className="title_2" style={{ height: 50 }}>
          <div id="current-h">{curDate.getHours()} : {curDate.getMinutes()}</div>
          <div id="current-d">{curDate.getDate()} : {curDate.getMonth() + 1} : {curDate.getFullYear()}</div>
        </div>
      </div>
      <div className="container px-4">
        <div className="row gx-5">
          <div className="col">
            <div className="p-3 border bg-light" style={{ borderRadius: "10%", height: "12rem", width: "12rem", marginBottom: "0.5rem"}}>
              <p>Air temperature</p>
              <p>{temperature_sensor} ℃</p>
            </div>
          </div>
          <div className="col">
            <div className="p-3 border bg-light" style={{ borderRadius: "10%", height: "12rem", width: "12rem", marginBottom: "0.5rem"}}>
              <p>Air humidity</p>
              <p>{humidity_sensor} %</p>
            </div>
          </div>
          <div className="col">
            <div className="p-3 border bg-light" style={{ borderRadius: "10%", height: "12rem", width: "12rem", marginBottom: "0.5rem"}}>
              <p>Light</p>
              <p>{light_sensor} Cd</p>
            </div>
          </div>
          <div className="col">
            <div className="p-3 border bg-light" style={{ borderRadius: "10%", height: "13rem", width: "13rem", marginBottom: "0.5rem"}}>
              <p>Soil moisture</p>
              <p>{soilmoisture_sensor} %</p>
            </div>
          </div>
        </div>
      </div>
      <div className="equip">
        <div>
          <img src="logo192.png" alt="img1" style={{witch: "100%"}}/>
        </div>
        <div>
          <img src="logo192.png" alt="img2" style={{witch: "10%"}}/>
        </div>
      </div>
    </div>
  </div>
</>

  );
  {/* // return (
  //   <div>
  //     <p>Message from light_sensor: {light_sensor}</p>
  //     <p>Message from soilmoisture_sensor: {soilmoisture_sensor}</p>
  //     <p>Message from humidity_sensor: {humidity_sensor}</p>
  //     <p>Message from temperature_sensor: {temperature_sensor}</p>
  //   </div>
  // ); */}
}

export default App;