import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import c3 from "c3";
import 'c3/c3.css';
import './chartdayly.css'
import { ticks } from "d3";

export const ChartAll = () => {

    const [timeline, setTimeline] = useState(['3', '4', '5', '6', '7', '8'])
    const [data1, setData1] = useState([30, 20, 15, 40, 15, 25])
    const [data2, setData2] = useState([50, 80, 90, 77, 95, 75])
    const [data3, setData3] = useState([50, 20, 10, 40, 15, 25])
    const [data4, setData4] = useState([30, 200, 100, 400, 150, 250])

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
                    type: 'indexed',
                    tick: {
                        format: (x) => {
                            switch (x) {
                                case 1: return "Jan"
                                case 2: return "Feb"
                                case 3: return "Mar"
                                case 4: return "Apr"
                                case 5: return "May"
                                case 6: return "Jun"
                                case 7: return "Jul"
                                case 8: return "Aug"
                                case 9: return "Sep"
                                case 10: return "Oct"
                                case 11: return "Nov"
                                default: return "Dec"
                            }
                        }
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
            zoom: {
                enabled: true
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
                    type: 'indexed',
                    tick: {
                        format: (x) => {
                            switch (x) {
                                case 1: return "Jan"
                                case 2: return "Feb"
                                case 3: return "Mar"
                                case 4: return "Apr"
                                case 5: return "May"
                                case 6: return "Jun"
                                case 7: return "Jul"
                                case 8: return "Aug"
                                case 9: return "Sep"
                                case 10: return "Oct"
                                case 11: return "Nov"
                                default: return "Dec"
                            }
                        }
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
            zoom: {
                enabled: true
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
                <NavLink to='/chart/dayly' className='navlink-truck navlink-truck-3'>
                    <div className='navlink-truck-container-3'>
                        Dayly
                    </div>
                </NavLink>
                <NavLink to='/chart/weekly' className='navlink-truck navlink-truck-2'>
                    <div className='navlink-truck-container-2'>
                        Week
                    </div>
                </NavLink>
                <NavLink to='/chart/all' className='navlink-truck navlink-truck-1'>
                    <div className='navlink-truck-container-1'>
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