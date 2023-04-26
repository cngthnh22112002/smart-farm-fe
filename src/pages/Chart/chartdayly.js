import React, { useState } from "react";
import io from 'socket.io-client';
import { NavLink } from "react-router-dom";
import c3 from "c3";
import 'c3/c3.css';
import './chartdayly.css'

const socket = io('http://localhost:5000');

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0M2QwMzIyNDExYjgwN2ZmMjc3YzY1NCIsImlhdCI6MTY4MjM1NDY3OSwiZXhwIjoxNjgyNjEzODc5fQ.E5dbIzY5tXQmaq2EwI8KIEgLgXtYaeqTjqLq-1sxvs0"

export const ChartDayly = () => {
  
    const [gardenList, setGardenList] = React.useState([])  // lưu danh sách vườn
    const [garden, setGarden] = useState("0")               // lưu index vườn đang chọn

    const [timeline, setTimeline] = useState(['10:45', '10:46', '10:47', '10:48', '10:49', '10:50', '10:51', '10:52', '10:53', '10:54', '10:55', '10:56', '10:57', '10:58', '10:58', '10:59', '11:00', '11:01', '11:02', '11:03', '11:04', '11:05'])
    const [data1, setData1] = useState([])
    const [data2, setData2] = useState([])
    const [data3, setData3] = useState([])
    const [data4, setData4] = useState([])

    const fetchData = async () => {

        let res = await fetch('http://localhost:5000/gardens/all', {
            method: 'GET',
            headers: {
                "Authorization": `Bearer ${token}`
            },
        })
        let resjson = await res.json()
        console.log("gardens list: ", resjson)
        setGardenList(resjson)

        var url = 'http://localhost:5000/sensors/today?gardenId=' + resjson[garden]._id + '&type='

        let tem = await fetch(url + 'temperature', {
            method: 'GET',
            headers: {
                "Authorization": `Bearer ${token}`
            },
        })
        let temjson = await tem.json()
        // console.log("tem list ",temjson)
        
        let humi = await fetch(url + 'humidity', {
            method: 'GET',
            headers: {
                "Authorization": `Bearer ${token}`
            },
        })
        let humijson = await humi.json()
        // console.log("humi list ",humijson)
        
        let light = await fetch(url + 'light', {
            method: 'GET',
            headers: {
                "Authorization": `Bearer ${token}`
            },
        })
        let lightjson = await light.json()
        // console.log("light list ",lightjson)
        
        let sm = await fetch(url + 'soilmoisture', {
            method: 'GET',
            headers: {
                "Authorization": `Bearer ${token}`
            },
        })
        let smjson = await sm.json()
        console.log("sm list ",smjson)
        console.log("length: ",smjson.length)
        // for (let i = 0; i < 10; i++){
        //     setData1([...data1, temjson[i].value])
        //     setData2([...data2, humijson[i].value])
        //     setData3([...data3, lightjson[i].value])
        //     setData4([...data4, smjson[i].value])
        //     data1.push(temjson[i].value)
        //     data2.push(humijson[i].value)
        //     data3.push(lightjson[i].value)
        //     data4.push(smjson[i].value)
        // }
        const temp1 = []
        temjson.forEach((item) => {
            temp1.push(item.value);
        });
        setData1(temp1)
        const temp2 = []
        humijson.forEach((item) => {
            temp2.push(item.value);
        });
        setData2(temp2)
        const temp3 = []
        lightjson.forEach((item) => {
            temp3.push(item.value);
        });
        setData3(temp3)
        const temp4 = []
        smjson.forEach((item) => {
            temp4.push(item.value);
        });
        setData4(temp4)
    }

    const handleChooseGarden = async (e) => {
        setGarden(e.target.value)
    }

    React.useEffect(() => {
        fetchData()
        console.log("ccc: ", data1)

        socket.on('light-sensor', (data) => {
            data3.push(data.value)
            chart2.load({
                columns: [
                    ['light', ...data3]
                ],
                unload: ['light'],
            });
            chart2.flush();
            console.log("light: ", data.value)
        });
        socket.on('soilmoisture-sensor', (data) => {
            data4.push(data.value)
            chart2.load({
                columns: [
                    ['moisture', ...data4]
                ],
                unload: ['moisture'],
            });
            chart2.flush();
            console.log("sm: ", data.value)
        });
        socket.on('humidity-sensor', (data) => {
            data2.push(data.value)
            chart1.load({
                columns: [
                    ['air_humidity', ...data2]
                ],
                unload: ['air_humidity'],
            });
            chart1.flush();
            console.log("humi: ", data.value)
        });
        socket.on('temperature-sensor', (data) => {
            data1.push(data.value)
            chart1.load({
                columns: [
                    ['air_temp', ...data1]
                ],
                unload: ['air_temp'],
            });
            chart1.flush();
            console.log("temp: ", data.value)
        });

    }, []);

    const chart1 = c3.generate({
        bindto: "#chart1",
        data: {
            x: 'x',
            columns: [
                ['x', ...timeline],
                ["air_temp", ...data1],
                ["air_humidity", ...data2],
            ],
            axes: {
                air_humidity: 'y2'
            },
            type: "line",
        },
        axis: {
            x: {
                type: 'category'
            },
            y: {
                tick: {
                    format:  (x) => {return x + "℃"}
                }
            },
            y2: {
                show: true,
                tick: {
                    format: (x) => {return x + "%"}
                }
            }
        },
        legend: {
            position: 'inset'
        },
        line: {
            connectNull: true
        },
        zoom: {
            enabled: true
        }
    });
    const chart2 = c3.generate({
        bindto: "#chart2",
        data: {
            x: 'x',
            columns: [
                ['x', ...timeline],
                ["light", ...data3],
                ["moisture", ...data4],
            ],
            axes: {
                moisture: 'y2'
            },
            type: "line",
        },
        axis: {
            x: {
                type: 'category'
            },
            y: {
                tick: {
                    format:  (x) => {return x + "Cd"}
                }
            },
            y2: {
                show: true,
                tick: {
                    format: (x) => {return x + "%"}
                }
            }
        },
        legend: {
            position: 'inset'
        },
        line: {
            connectNull: true
        },
        zoom: {
            enabled: true
        }
    });

  return (
    <>
        <div className='title'>
            <div className='left-div'>
                <h1>Enviroment Chart</h1>
            </div>
            {console.log("cc1: ", data1)}
            {console.log("cc2: ", data2)}
            {console.log("cc3: ", data3)}
            {console.log("cc4: ", data4)}
            <select 
                value={garden}
                onChange={(e) => handleChooseGarden(e)}
                style={{width:'20%', margin:'1rem', borderRadius:'15px'}}>
                <option disabled="disabled" value="null">--Chose garden--</option>
                {gardenList.map((t, index) => 
                    <option key = {index} value = {index}>{t.name}</option>
                )}
            </select>
            <div className='right-div'>
                <NavLink to='/chart/dayly' className='navlink-truck navlink-truck-1'>
                    <div className='navlink-truck-container-1'>
                        Dayly
                    </div>
                </NavLink>
                <NavLink to='/chart/weekly' className='navlink-truck navlink-truck-2'>
                    <div className='navlink-truck-container-2'>
                        Week
                    </div>
                </NavLink>
                <NavLink to='/chart/all' className='navlink-truck navlink-truck-3'>
                    <div className='navlink-truck-container-3'>
                        All
                    </div>
                </NavLink>
            </div>
        </div>
        <div id="chart1" />
        <div id="chart2" />
    </>
  ) 
};