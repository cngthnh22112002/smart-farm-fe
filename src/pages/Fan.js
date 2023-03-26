import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import './Fan.css';

const socket = io('http://localhost:5000');

var curDate = new Date();


export default function Fan() {

  const [light_sensor, setLightSensor] = useState('');
  const [soilmoisture_sensor, setSoilmoistureSensor] = useState('');
  const [humidity_sensor, setHumiditySensor] = useState('');
  const [temperature_sensor, setTemperatureSensor] = useState('');

  const [fan1, setFan1] = React.useState(false);
  const [fan2, setFan2] = React.useState(false);
  const [fan3, setFan3] = React.useState(false);
  const [fan4, setFan4] = React.useState(false);
  const [fan5, setFan5] = React.useState(false);
  const [fan6, setFan6] = React.useState(false);

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
    socket.on('fan1', data => {setFan1(data==="ON" ? true : false);});
    socket.on('fan2', data => {setFan2(data==="ON" ? true : false);});
    socket.on('fan3', data => {setFan3(data==="ON" ? true : false);});
    socket.on('fan4', data => {setFan4(data==="ON" ? true : false);});
    socket.on('fan5', data => {setFan5(data==="ON" ? true : false);});
    socket.on('fan6', data => {setFan6(data==="ON" ? true : false);});
  }, []);

  return(
    <>
      <div className="body">
        <div className='col1'style={{width: "80%"}}>
          <div className='equip'>
            <div className="title">
              <div style={{width: "80%", textAlign: "left", margin: "1rem" }}>
                <h1>Fan</h1>
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
                      <p>Fan 1</p>
                      <input type="checkbox" className="button" id="fan1" checked={fan1} onChange={
                        () => {setFan1(!fan1); (fan1===true ? socket.emit("fan", "OFF") : socket.emit("fan", "ON"))}
                      }></input>
                    </div>
                  </div>
                  <div className="col">
                    <div className="p-3 border bg-light" style={{ borderRadius: "10%", height: "6rem", width: "12rem", marginBottom: "0.5rem"}}>
                      <p>Fan 2</p>
                      <input type="checkbox" className="button" id="fan2" checked={fan2} onChange={
                        () => {setFan2(!fan2); console.log("sent mess 2")}
                      }></input>
                    </div> 
                  </div>
                  <div className="col">
                    <div className="p-3 border bg-light" style={{ borderRadius: "10%", height: "6rem", width: "12rem", marginBottom: "0.5rem"}}>
                      <p>Fan 3</p>
                      <input type="checkbox" className="button" id="fan3" checked={fan3} onChange={
                        () => {setFan3(!fan3); console.log("sent mess 3")}
                      }></input>
                    </div>
                  </div>
                  <div className="col">
                    <div className="p-3 border bg-light" style={{ borderRadius: "10%", height: "6rem", width: "12rem", marginBottom: "0.5rem"}}>
                      <p>Fan 4</p>
                      <input type="checkbox" className="button" id="fan4" checked={fan4} onChange={
                        () => {setFan4(!fan4); console.log("sent mess 4")}
                      }></input>
                    </div>
                  </div>
                  <div className="col">
                    <div className="p-3 border bg-light" style={{ borderRadius: "10%", height: "6rem", width: "12rem", marginBottom: "0.5rem"}}>
                      <p>Fan 5</p>
                      <input type="checkbox" className="button" id="fan5" checked={fan5} onChange={
                        () => {setFan5(!fan5); console.log("sent mess 5")}
                      }></input>
                    </div>
                  </div>
                  <div className="col">
                    <div className="p-3 border bg-light" style={{ borderRadius: "10%", height: "6rem", width: "12rem", marginBottom: "0.5rem"}}>
                      <p>Fan 6</p>
                      <input type="checkbox" className="button" id="fan6" checked={fan6} onChange={
                        () => {setFan6(!fan6); console.log("sent mess 6")}
                      }></input>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <p>Đống này để kiểm tra thôi đừng để ý</p>
            <p>fan1: {fan1 === true ? 1 : 0 }  </p>
            <p>fan2: {fan2 === true ? 1 : 0 }  </p>
            <p>fan3: {fan3 === true ? 1 : 0 }  </p>
            <p>fan4: {fan4 === true ? 1 : 0 }  </p>
            <p>fan5: {fan5 === true ? 1 : 0 }  </p>
            <p>fan6: {fan6 === true ? 1 : 0 }  </p>
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