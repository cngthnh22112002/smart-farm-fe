import React, { useState } from "react";
import io from 'socket.io-client';
import { NavLink } from "react-router-dom";
import c3 from "c3";
import 'c3/c3.css';
import './chartdayly.css'

const socket = io('http://localhost:5000');

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0M2QwMzIyNDExYjgwN2ZmMjc3YzY1NCIsImlhdCI6MTY4MjM1NDY3OSwiZXhwIjoxNjgyNjEzODc5fQ.E5dbIzY5tXQmaq2EwI8KIEgLgXtYaeqTjqLq-1sxvs0"

export const ChartWeekly = () => {
  
    const [gardenList, setGardenList] = React.useState([])  // lưu danh sách vườn
    const [garden, setGarden] = useState("0")               // lưu index vườn đang chọn

    const [timeline, setTimeline] = useState(['2013-01-01', '2013-01-02', '2013-01-03', '2013-01-04', '2013-01-05', '2013-01-06'])
    const [data1, setData1] = useState([26, 26.45, 26.5, 25.85, 26])
    const [data2, setData2] = useState([50, 55, 53, 55, 51])
    const [data3, setData3] = useState([26, 26.45, 26.5, 25.85, 26])
    const [data4, setData4] = useState([50, 55, 53, 55, 51])

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

        var url = 'http://localhost:5000/reports/week?gardenId=' + resjson[garden]._id + '&type='
        
        let tem = await fetch(url + 'temperature', {
            method: 'GET',
            headers: {
                "Authorization": `Bearer ${token}`
            },
        })
        let temjson = await tem.json()
        console.log("tem list ",temjson)
        
        let humi = await fetch(url + 'humidity', {
            method: 'GET',
            headers: {
                "Authorization": `Bearer ${token}`
            },
        })
        let humijson = await humi.json()
        console.log("humi list ",humijson)
        
        let light = await fetch(url + 'light', {
            method: 'GET',
            headers: {
                "Authorization": `Bearer ${token}`
            },
        })
        let lightjson = await light.json()
        console.log("light list ",lightjson)
        
        let sm = await fetch(url + 'soilmoisture', {
            method: 'GET',
            headers: {
                "Authorization": `Bearer ${token}`
            },
        })
        let smjson = await sm.json()
        console.log("sm list ",smjson)

        // for (let i = 0; i < smjson.length; i = i + 50){
        //     setData1([...data1, temjson[i].value])
        //     setData2([...data2, humijson[i].value])
        //     setData3([...data3, lightjson[i].value])
        //     setData4([...data4, smjson[i].value])
        // }
    }

    const handleChooseGarden = async (e) => {
        setGarden(e.target.value)
    }

    // const getDataWeekly = async () => {
    //     var url = 'http://localhost:5000/reports/week?gardenId=' + garden[garden] + '&type=' + 'temperature'
    //     let res = await fetch('http://localhost:5000/gardens/all', {
    //         method: 'GET',
    //         headers: {
    //             "Authorization": `Bearer ${token}`
    //         },
    //     })
    //     let resjson = await res.json()
    //     console.log(resjson)
    // }

    React.useEffect(() => {
        fetchData()
        c3.generate({
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
                    type: 'timeseries',
                    tick: {
                        format: '%Y-%m-%d'
                    }
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
            }
        });
        c3.generate({
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
                    type: 'timeseries',
                    tick: {
                        format: '%Y-%m-%d'
                    }
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
            }
        });
    }, []);
  return (
    <>
        <div className='title'>
            <div className='left-div'>
                <h1>Enviroment Chart</h1>
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
            <div className='right-div'>
                <NavLink to='/chart/dayly' className='navlink-truck navlink-truck-2'>
                    <div className='navlink-truck-container-2'>
                        Dayly
                    </div>
                </NavLink>
                <NavLink to='/chart/weekly' className='navlink-truck navlink-truck-1'>
                    <div className='navlink-truck-container-1'>
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