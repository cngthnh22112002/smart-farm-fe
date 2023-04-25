import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import c3 from "c3";
import 'c3/c3.css';
import './chartdayly.css'

export const ChartDayly = () => {

    const [timeline, setTimeline] = useState([
                '03:20',
                '04:20',
                '05:20',
                '06:20',
                '07:20',
                '08:20',
                '09:20',
                '10:20',
                '11:20',
                '12:20',
                '13:20',
                '14:20',
                '15:20',
                '16:20',
                '17:20',
                '17:40',
                '19:20',
                '20:20',
                '21:20',
                '22:20',
                '23:20',
                '24:20',
                '25:20',
                '26:20',
            ])
    const [data1, setData1] = useState([30, 20, 10, 40, 15, 25,30, 20, 10, 40, 15, 25,30, 20, 10, 40, 15, 25,30, 20, 10, 40, 15, 25])
    const [data2, setData2] = useState([50, 80, 90, 77, 95, 75,50, 80, 90, 77, 95, 75,50, 80, 90, 77, 95, 75,50, 80, 90, 77, 95, 75])
    const [data3, setData3] = useState([50, 20, 10, 40, 15, 25,50, 20, 10, 40, 15, 25,50, 20, 10, 40, 15, 25,50, 20, 10, 40, 15, 25])
    const [data4, setData4] = useState([30, 200, 100, 400, 150, 250,30, 200, 100, 400, 150, 250,30, 200, 100, 400, 150, 250,30, 200, 100, 400, 150, 250])

    React.useEffect(() => {
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
            }
        });
    }, []);
  return (
    <>
        <div className='title'>
            <div className='left-div'>
                <h1>Enviroment Chart</h1>
            </div>
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