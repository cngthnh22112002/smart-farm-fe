import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { NavLink } from "react-router-dom";
// import {tokenVar} from '../Login/Login'

function NotifyToday() {
  const [data, setData] = useState([]);
  const [token, setToken] = useState('');
  const getCurrentDateTime = (createdAt) => {
      const currentDate = new Date();
      const day = currentDate.getDate(); 
      const month = currentDate.getMonth() + 1; 
      const year = currentDate.getFullYear(); // Lấy năm
      const hour = currentDate.getHours(); 
      const minute = currentDate.getMinutes(); 
      const second = currentDate.getSeconds(); 
      return `${day}/${month}/${year} ${hour}:${minute}:${second}`;
  };
  
  useEffect(() => {
    // Get the token from your authentication system
    // setToken(localStorage.getItem('token'))
    // console.log(token)
    // const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0M2QwMzIyNDExYjgwN2ZmMjc3YzY1NCIsImlhdCI6MTY4MjI1NjgwOSwiZXhwIjoxNjgyNTE2MDA5fQ.dFQ8GJ3x-R0Tb4HgP72BqyrzfBYR3iZxyjulbZcW7Ik';
    //const token = tokenVar;
    // setToken(token);
    // alert(token)
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NDZiYjAwYTMxYTdkMTBhYjQ3MzAyYSIsImlhdCI6MTY4MjQ0MDY3MCwiZXhwIjoxNjgyNjk5ODcwfQ.bWPBq0JMC9tiV7u98NGt4wPo_xSEnHbxi5w47QwLb_I";
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/notification/today', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
        <div className='title'>
            <div className='left-div'>
                <h1>Notification</h1>
                <p>{token}</p>
            </div>
           
            <div className='right-div'>
                <NavLink to='/notify/today' className='navlink-truck navlink-truck-1'>
                    <div className='navlink-truck-container-1'>
                        Today
                    </div>
                </NavLink>
                <NavLink to='/notify/all' className='navlink-truck navlink-truck-2'>
                    <div className='navlink-truck-container-2'>
                        All
                    </div>
                </NavLink>
            </div>
        </div>
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '20px',
                backgroundColor: '#efefef',
                boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
            }}
        >
            <div
                style={{
                    backgroundColor: 'grey',
                    display: 'flex',
                    flexDirection: 'column',
                    flex: 2,
                    justifyContent: 'space-between',
                    marginRight: 20,
                    marginBottom: 560,
                }}
            >
            </div>
            <div style={{ flex: 35 }}>
                {data.map(item => (
                    <div key={item.id}
                        style={{
                            backgroundColor: '#fff',
                            padding: '10px',       
                        }}
                    >
                        <div style={{ 
                            fontSize: '12px', 
                            color: '#000022', 
                            border: '2px solid #000',
                            marginBottom: '4px', 
                            width: '160px',
                            height: '24px',
                            background: '#3399FF',
                            borderRadius: '4px 4px 4px 4px',
                            }}>
                            {getCurrentDateTime(item.createdAt)}
                        </div>
                        <div style={{ 
                            fontSize: '16px', 
                            borderTop: '4px solid green', 
                            backgroundColor: '#00FFCC', 
                            borderRadius: '0 0 4px 4px',
                           }}>
                            <div
                                style={{
                                    fontWeight: 'bold',
                                    textAlign: 'left',
                                    marginLeft: '10px'
                                }}>
                                {item.title}
                            </div>
                            <div style={{
                                    textAlign: 'left',
                                    marginLeft: '10px'
                                }}>
                            {item.message}
                            </div>
                        </div>
                        
                    </div>    
                ))}
            </div>
        </div>
        {/* <div id="chart1" />;
        <div id="chart2" />; */}
    </>
  );
}

export default NotifyToday;