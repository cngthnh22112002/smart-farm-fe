import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import './Homepage.css';
import { Chart } from '../Chart/Chart';

const socket = io('http://localhost:5000');

var curDate = new Date();

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0M2QwMzIyNDExYjgwN2ZmMjc3YzY1NCIsImlhdCI6MTY4MjM1NDY3OSwiZXhwIjoxNjgyNjEzODc5fQ.E5dbIzY5tXQmaq2EwI8KIEgLgXtYaeqTjqLq-1sxvs0"

export default function Homepage() {
  const [light_sensor, setLightSensor] = useState('30');
  const [soilmoisture_sensor, setSoilmoistureSensor] = useState('31');
  const [humidity_sensor, setHumiditySensor] = useState('32');
  const [temperature_sensor, setTemperatureSensor] = useState('33');

  const [gardenList, setGardenList] = React.useState([])  // lưu danh sách vườn
  const [garden, setGarden] = useState("0")               // lưu index vườn đang chọn

  const fetchData = async () => {
    // lấy danh sách vườn
    let res = await fetch('http://localhost:5000/gardens/all', {
      method: 'GET',
      headers: {
        "Authorization": `Bearer ${token}`
      },
    })
    let resjson = await res.json()
    console.log("gardens list: ", resjson)
    setGardenList(resjson)

    // kết nối vườn đầu tiên khi mới vào trang
    var urlconnect = 'http://localhost:5000/bridge/data?gardenId=' + resjson[0]._id
    let temp = await fetch(urlconnect, {
      method: 'GET',
      headers: {
        "Authorization": `Bearer ${token}`
      },
    })

    // lấy thông tin môi trường
    socket.on('light-sensor', (data) => {
      setLightSensor(JSON.parse(data).value);
    });
    socket.on('soilmoisture-sensor', (data) => {
      setSoilmoistureSensor(JSON.parse(data).value);
    });
    socket.on('humidity-sensor', (data) => {
      setHumiditySensor(JSON.parse(data).value);
    });
    socket.on('temperature-sensor', (data) => {
      setTemperatureSensor(JSON.parse(data).value);
    });
  }

  // lấy lại thông tin môi trường lúc đổi vườn
  // const getEnv = () => {
  //   socket.on('light-sensor', (data) => {
  //     setLightSensor(data.value);
  //   });
  //   socket.on('soilmoisture-sensor', (data) => {
  //     setSoilmoistureSensor(data.value);
  //   });
  //   socket.on('humidity-sensor', (data) => {
  //     setHumiditySensor(data.value);
  //   });
  //   socket.on('temperature-sensor', (data) => {
  //     setTemperatureSensor(data.value);
  //   });
  // }

  useEffect(() => {
    fetchData()
  }, []);

  // đổi vườn, lấy danh sách đèn tương ứng
  const handleChooseGarden = async (e) => {
    setGarden(e.target.value)
    // // disconnect garden
    // let temp1 = await fetch('http://localhost:5000/bridge/disconnect', {
    //   method: 'GET',
    //   headers: {
    //     "Authorization": `Bearer ${token}`
    //   },
    // })
    // // connect new garden
    // var urlconnect = 'http://localhost:5000/bridge/data?gardenId=' + gardenList[garden]._id
    // let temp2 = await fetch(urlconnect, {
    //   method: 'GET',
    //   headers: {
    //     "Authorization": `Bearer ${token}`
    //   },
    // })
    // getEnv()    // lấy lại thông tin môi trường
  }

  return (
<>
  <div className="title" style={{ marginLeft: 30, height: 50, marginBottom: 30 }}>
    <div style={{ width: "60%", margin: 0, textAlign: "left"}}>
      <h1>Home Page</h1>
    </div>
    <select 
      value={garden}
      onChange={(e) => handleChooseGarden(e)}
      style={{width:'15%', borderRadius:'15px'}}>
      <option disabled="disabled" value="null">--Chose garden--</option>
      {gardenList.map((t, index) => 
        <option key = {index} value = {index}>{t.name}</option>
      )}
    </select>
    <div style={{width: "5%"}}></div>
    <div className="title_2" style={{ height: 50 }}>
      <div id="current-h">{curDate.getHours()} : {curDate.getMinutes()}</div>
      <div id="current-d">{curDate.getDate()} : {curDate.getMonth() + 1} : {curDate.getFullYear()}</div>
    </div>
  </div>
  <div className="container px-4">
    <div className="row gx-5">
    <div className="col">
        <div className="p-3 border bg-light" style={{ borderRadius: "10%", height: "12rem", width: "12rem", marginBottom: "0.5rem", backgroundColor: "#FEEEDF"}}>
          <p>Air temperature</p>
          <p>{temperature_sensor} ℃</p>
          <img src = "hinh1.png"></img>
        </div>
      </div>
      <div className="col">
        <div className="p-3 border bg-light" style={{ borderRadius: "10%", height: "12rem", width: "12rem", marginBottom: "0.5rem", backgroundColor: "#BFF8FC !important"}}>
          <p>Air humidity</p>
          <p>{humidity_sensor} %</p>
          <img src = "hinh2.png"></img>
        </div>
      </div>
      <div className="col">
        <div className="p-3 border bg-light" style={{ borderRadius: "10%", height: "12rem", width: "12rem", marginBottom: "0.5rem", backgroundColor: "#FDFFA4 !important"}}>
          <p>Light</p>
          <p>{light_sensor} Cd</p>
          <img src = "hinh3.png"></img>
        </div>
      </div>
      <div className="col">
        <div className="p-3 border bg-light" style={{ borderRadius: "10%", height: "12rem", width: "12rem", marginBottom: "0.5rem", backgroundColor: "#CDA4F6"}}>
          <p>Soil moisture</p>
          <p>{soilmoisture_sensor} %</p>
          <img src = "hinh4.png"></img>
        </div>
      </div>
    </div>
  </div>
  <div className="equip">
    <Chart />
    {/* <div style={{margin: '10px'}}>
      <iframe 
        width="50%"
        height='350px'
        src="https://www.youtube.com/embed/r07l0qQZe4Y"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen />
    </div>
    <div style={{margin: '10px'}}>
      <iframe 
        width="50%"
        height='350px'
        src="https://www.youtube.com/embed/pXIw6pwx8zo"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen />
    </div> */}
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