import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import './Pump.css';

const socket = io('http://localhost:5000');

var curDate = new Date();

export default function Pump() {
  
  const [light_sensor, setLightSensor] = useState('');
  const [soilmoisture_sensor, setSoilmoistureSensor] = useState('');
  const [humidity_sensor, setHumiditySensor] = useState('');
  const [temperature_sensor, setTemperatureSensor] = useState('');

  const [pump1, setPump1] = React.useState(false);
  const [pump2, setPump2] = React.useState(false);
  const [pump3, setPump3] = React.useState(false);
  const [pump4, setPump4] = React.useState(false);
  const [pump5, setPump5] = React.useState(false);
  const [pump6, setPump6] = React.useState(false);

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
    socket.on('pump1', data => {setPump1(data==="ON" ? true : false);});
    socket.on('pump2', data => {setPump2(data==="ON" ? true : false);});
    socket.on('pump3', data => {setPump3(data==="ON" ? true : false);});
    socket.on('pump4', data => {setPump4(data==="ON" ? true : false);});
    socket.on('pump5', data => {setPump5(data==="ON" ? true : false);});
    socket.on('pump6', data => {setPump6(data==="ON" ? true : false);});
  }, []);
  return(
    <>
      <div className="body">
        <div className='col1'style={{width: "80%"}}>
          <div className='equip'>
            <div className="title">
              <div style={{width: "80%", textAlign: "left", margin: "1rem" }}>
                <h1>Water Pump</h1>
              </div>
              <div style={{width: "20%", display: "flex", alignItems: "center", justifyContent: "center", background: "#3d94db", borderRadius: "15px", margin: "1rem"}}>
                <h6>Add equipment</h6>
                {/* <button onChange={console.log("abc")}>Add equipment</button> */}
              </div>
            </div>
            <div className='body2'>
              <div className="container px-4">
                <div className="row gx-5">
                  <div className="col">
                    <div className="p-3 border bg-light" style={{ borderRadius: "10%", height: "6rem", width: "12rem", marginBottom: "0.5rem"}}>
                      <p>Pump 1</p>
                      <input type="checkbox" className="button" id="pump1" checked={pump1} onChange={
                        () => {setPump1(!pump1); (pump1===true ? socket.emit("water_pumps", "OFF") : socket.emit("water_pumps", "ON"))}
                      }></input>
                    </div>
                  </div>
                  <div className="col">
                    <div className="p-3 border bg-light" style={{ borderRadius: "10%", height: "6rem", width: "12rem", marginBottom: "0.5rem"}}>
                      <p>Pump 2</p>
                      <input type="checkbox" className="button" id="pump2" checked={pump2} onChange={
                        () => {setPump2(!pump2); console.log("sent mess 2")}
                      }></input>
                    </div> 
                  </div>
                  <div className="col">
                    <div className="p-3 border bg-light" style={{ borderRadius: "10%", height: "6rem", width: "12rem", marginBottom: "0.5rem"}}>
                      <p>Pump 3</p>
                      <input type="checkbox" className="button" id="pump3" checked={pump3} onChange={
                        () => {setPump3(!pump3); console.log("sent mess 3")}
                      }></input>
                    </div>
                  </div>
                  <div className="col">
                    <div className="p-3 border bg-light" style={{ borderRadius: "10%", height: "6rem", width: "12rem", marginBottom: "0.5rem"}}>
                      <p>Pump 4</p>
                      <input type="checkbox" className="button" id="pump4" checked={pump4} onChange={
                        () => {setPump4(!pump4); console.log("sent mess 4")}
                      }></input>
                    </div>
                  </div>
                  <div className="col">
                    <div className="p-3 border bg-light" style={{ borderRadius: "10%", height: "6rem", width: "12rem", marginBottom: "0.5rem"}}>
                      <p>Pump 5</p>
                      <input type="checkbox" className="button" id="pump5" checked={pump5} onChange={
                        () => {setPump5(!pump5); console.log("sent mess 5")}
                      }></input>
                    </div>
                  </div>
                  <div className="col">
                    <div className="p-3 border bg-light" style={{ borderRadius: "10%", height: "6rem", width: "12rem", marginBottom: "0.5rem"}}>
                      <p>Pump 6</p>
                      <input type="checkbox" className="button" id="pump6" checked={pump6} onChange={
                        () => {setPump6(!pump6); console.log("sent mess 6")}
                      }></input>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <p>Đống này để kiểm tra thôi đừng để ý</p>
            <p>pump1: {pump1 === true ? 1 : 0 }  </p>
            <p>pump2: {pump2 === true ? 1 : 0 }  </p>
            <p>pump3: {pump3 === true ? 1 : 0 }  </p>
            <p>pump4: {pump4 === true ? 1 : 0 }  </p>
            <p>pump5: {pump5 === true ? 1 : 0 }  </p>
            <p>pump6: {pump6 === true ? 1 : 0 }  </p>
          </div>
        </div>
        <div className='col2'style={{width: "20%"}}>
          <div className="datetime" style={{ height: 50 }}>
            <div id="current-h">{curDate.getHours()} : {curDate.getMinutes()}</div>
            <div id="current-d">{curDate.getDate()} : {curDate.getMonth() + 1} : {curDate.getFullYear()}</div>
          </div>
          <div className="container px-4">
            <div className="row gx-5">
              <div className="col">
                <div className="p-3 border bg-light" style={{ borderRadius: "10%", height: "6rem", width: "12rem", marginBottom: "0.5rem"}}>
                  <p>Air temperature</p>
                  <p>{temperature_sensor} ℃</p>
                </div>
              </div>
              <div className="col">
                <div className="p-3 border bg-light" style={{ borderRadius: "10%", height: "6rem", width: "12rem", marginBottom: "0.5rem"}}>
                  <p>Air humidity</p>
                  <p>{humidity_sensor} %</p>
                </div>
              </div>
              <div className="col">
                <div className="p-3 border bg-light" style={{ borderRadius: "10%", height: "6rem", width: "12rem", marginBottom: "0.5rem"}}>
                  <p>Light</p>
                  <p>{light_sensor} Cd</p>
                </div>
              </div>
              <div className="col">
                <div className="p-3 border bg-light" style={{ borderRadius: "10%", height: "6rem", width: "12rem", marginBottom: "0.5rem"}}>
                  <p>Soil moisture</p>
                  <p>{soilmoisture_sensor} %</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}