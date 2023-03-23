import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import './Homepage.css';

const socket = io('http://localhost:5000');

var curDate = new Date();

export default function Homepage() {
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
      <div className="title" style={{ marginLeft: 30, height: 50, marginBottom: 30 }}>
        <div style={{ width: "80%", margin: 0, textAlign: "left"}}>
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
            <div className="p-3 border bg-light" style={{ borderRadius: "10%", height: "12rem", width: "12rem", marginBottom: "0.5rem"}}>
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