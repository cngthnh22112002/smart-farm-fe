import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import './Pump.css';

const socket = io('http://localhost:5000');

var curDate = new Date();

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0M2QwMzIyNDExYjgwN2ZmMjc3YzY1NCIsImlhdCI6MTY4MjM1NDY3OSwiZXhwIjoxNjgyNjEzODc5fQ.E5dbIzY5tXQmaq2EwI8KIEgLgXtYaeqTjqLq-1sxvs0"

export default function Pump() {
  // 4 biến môi trường
  const [light_sensor, setLightSensor] = useState('');
  const [soilmoisture_sensor, setSoilmoistureSensor] = useState('');
  const [humidity_sensor, setHumiditySensor] = useState('');
  const [temperature_sensor, setTemperatureSensor] = useState('');

  const [pump, setPump] = React.useState(false)         // lưu trạng thái đèn
  const [pumpList, setPumpList] = useState([[]])        // lưu danh sách đèn
  const [gardenList, setGardenList] = React.useState([])  // lưu danh sách vườn
  const [garden, setGarden] = useState("0")               // lưu index vườn đang chọn
  const [arrNull, setArrNull] = React.useState([])        // mảng rỗng

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
    socket.on('pump', data => {setPump(data=="1" ? true : false);})
  }

  // lấy lại thông tin môi trường lúc đổi vườn
  const getEnv = () => {
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
    socket.on('pump', data => {setPump(data=="1" ? true : false);})
  }

  // đổi vườn, lấy danh sách đèn tương ứng
  const handleChooseGarden = async (e) => {
    setGarden(e.target.value)
    setPumpList([...arrNull,gardenList[e.target.value].water_pumps])
    // disconnect garden
    let temp1 = await fetch('http://localhost:5000/bridge/disconnect', {
      method: 'GET',
      headers: {
        "Authorization": `Bearer ${token}`
      },
    })
    // connect new garden
    var urlconnect = 'http://localhost:5000/bridge/data?gardenId=' + gardenList[garden]._id
    let temp2 = await fetch(urlconnect, {
      method: 'GET',
      headers: {
        "Authorization": `Bearer ${token}`
      },
    })
    getEnv()    // lấy lại thông tin môi trường
  }

  const handleAddPump = async () => {
    var res = {
      "gardenId": gardenList[garden]._id
    }
    console.log("res: ", res)
    console.log("index: ", garden)
    let temp = await fetch('http://localhost:5000/devices/pump', {
      method: 'POST',
      headers: {
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify(res)
    })
    let resjson = await temp.json()
    console.log("Response: ", resjson)
  }

  useEffect(() => {
    fetchData()
  }, []);

  return (
  <>
    <div className="body">
      <div className='col1'style={{width: "80%"}}>
        <div className='equip'>
          <div className="title">
            <div style={{width: "60%", textAlign: "left", margin: "1rem" }}>
              <h1>Pump</h1>
            </div>
            <select 
              value={garden}
              onChange={(e) => handleChooseGarden(e)}
              style={{width:'20%', margin:'1rem', borderRadius:'15px'}}>
              <option disabled="disabled" value="null">--Chose garden--</option>
              {gardenList.map((t, index) => 
                <option key = {index} value = {index}>{t.name}</option>
              )}
            </select>
            <button onClick={() => {
              handleAddPump()
              alert("Add success!")
            }}>
              Add equipment
            </button>
          </div>
          <div className='body2'>
            <div className="container px-4">
              <div className="row gx-5">
                <div className="col">
                  <div className="p-3 border bg-light" style={{ borderRadius: "10%", height: "6rem", width: "12rem", marginBottom: "0.5rem"}}>
                    <p>Pump 1</p>
                    <input type="checkbox" className="button" id="light" checked={pump} onChange={
                      () => {setPump(!pump); (pump===true ? socket.emit("pump", "0") : socket.emit("pump", "1"))}
                    }></input>
                  </div>
                </div>
                {pumpList[0].slice(1).map((t, index) => 
                  <div className="col" id={t}>
                    <div className="p-3 border bg-light" style={{ borderRadius: "10%", height: "6rem", width: "12rem", marginBottom: "0.5rem"}}>
                      <p>Pump {index + 1}</p>
                      <input type="checkbox" className="button" id="light" 
                        // checked={light}
                        // onChange={
                        //   () => {setLight(!light)}
                        // }
                      ></input>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
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