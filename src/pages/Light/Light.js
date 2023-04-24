import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import './Light.css';

const socket = io('http://localhost:5000');

var curDate = new Date();

export default function Light() {
  
  const [light_sensor, setLightSensor] = useState('');
  const [soilmoisture_sensor, setSoilmoistureSensor] = useState('');
  const [humidity_sensor, setHumiditySensor] = useState('');
  const [temperature_sensor, setTemperatureSensor] = useState('');

  const [light1, setLight1] = React.useState(false);
  const [light2, setLight2] = React.useState(false);
  const [light3, setLight3] = React.useState(false);
  const [light4, setLight4] = React.useState(false);
  const [light5, setLight5] = React.useState(false);
  const [light6, setLight6] = React.useState(false);

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
    socket.on('light', data => {setLight1(data==="ON" ? true : false);});
    socket.on('light2', data => {setLight2(data==="ON" ? true : false);});
    socket.on('light3', data => {setLight3(data==="ON" ? true : false);});
    socket.on('light4', data => {setLight4(data==="ON" ? true : false);});
    socket.on('light5', data => {setLight5(data==="ON" ? true : false);});
    socket.on('light6', data => {setLight6(data==="ON" ? true : false);});
  }, []);

  return (
<>
  <div className="body">
    <div className='col1'style={{width: "80%"}}>
      <div className='equip'>
        <div className="title">
          <div style={{width: "80%", textAlign: "left", margin: "1rem" }}>
            <h1>Light</h1>
          </div>
          <button onClick={() => alert("This feature is not supported yet")}>
            Add equipment
          </button>
        </div>
        <div className='body2'>
          <div className="container px-4">
            <div className="row gx-5">
              <div className="col">
                <div className="p-3 border bg-light" style={{ borderRadius: "10%", height: "6rem", width: "12rem", marginBottom: "0.5rem"}}>
                  <p>Light 1</p>
                  <input type="checkbox" className="button" id="light1" checked={light1} onChange={
                    () => {setLight1(!light1); (light1===true ? socket.emit("light", "OFF") : socket.emit("light", "ON"))}
                  }></input>
                </div>
              </div>
              <div className="col">
                <div className="p-3 border bg-light" style={{ borderRadius: "10%", height: "6rem", width: "12rem", marginBottom: "0.5rem"}}>
                  <p>Light 2</p>
                  <input type="checkbox" className="button" id="light2" checked={light2} onChange={
                    () => {setLight2(!light2); console.log("sent mess 2")}
                  }></input>
                </div> 
              </div>
              <div className="col">
                <div className="p-3 border bg-light" style={{ borderRadius: "10%", height: "6rem", width: "12rem", marginBottom: "0.5rem"}}>
                  <p>Light 3</p>
                  <input type="checkbox" className="button" id="light3" checked={light3} onChange={
                    () => {setLight3(!light3); console.log("sent mess 3")}
                  }></input>
                </div>
              </div>
              <div className="col">
                <div className="p-3 border bg-light" style={{ borderRadius: "10%", height: "6rem", width: "12rem", marginBottom: "0.5rem"}}>
                  <p>Light 4</p>
                  <input type="checkbox" className="button" id="light4" checked={light4} onChange={
                    () => {setLight4(!light4); console.log("sent mess 4")}
                  }></input>
                </div>
              </div>
              <div className="col">
                <div className="p-3 border bg-light" style={{ borderRadius: "10%", height: "6rem", width: "12rem", marginBottom: "0.5rem"}}>
                  <p>Light 5</p>
                  <input type="checkbox" className="button" id="light5" checked={light5} onChange={
                    () => {setLight5(!light5); console.log("sent mess 5")}
                  }></input>
                </div>
              </div>
              <div className="col">
                <div className="p-3 border bg-light" style={{ borderRadius: "10%", height: "6rem", width: "12rem", marginBottom: "0.5rem"}}>
                  <p>Light 6</p>
                  <input type="checkbox" className="button" id="light6" checked={light6} onChange={
                    () => {setLight6(!light6); console.log("sent mess 6")}
                  }></input>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p>Đống này để kiểm tra thôi đừng để ý</p>
        <p>light1: {light1 === true ? 1 : 0 }  </p>
        <p>light2: {light2 === true ? 1 : 0 }  </p>
        <p>light3: {light3 === true ? 1 : 0 }  </p>
        <p>light4: {light4 === true ? 1 : 0 }  </p>
        <p>light5: {light5 === true ? 1 : 0 }  </p>
        <p>light6: {light6 === true ? 1 : 0 }  </p>
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