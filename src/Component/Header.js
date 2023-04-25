import React, { useState, useEffect }  from "react";
import { NavLink, useNavigate } from 'react-router-dom';
import './Header.css'
import Profile from './../pages/profile/profile'
import axios from 'axios'
const Header = () => {
  const [data, setData] = useState([]);
  const [token, setToken] = useState('');
  useEffect(() => {
    // Get the token from your authentication system
    token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0M2QwMzIyNDExYjgwN2ZmMjc3YzY1NCIsImlhdCI6MTY4MjM1NzU3MywiZXhwIjoxNjgyNjE2NzczfQ.tenpKuH4IBTMeEBrfFmNhibiYovlkTev-IHDtlr-Cwo';
    setToken(token);

    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/user', {
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

  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
     setIsHover(true);
  };

  const handleMouseLeave = () => {
     setIsHover(false);
  };
    return (
      <div>
          <div className="icon1" style={{marginBottom: '5px', background: "grey"}}>
              <i className="bi bi-question-circle" />
              <i className="bi bi-gear" />
              <NavLink to="/notify">
                <i className="bi bi-bell" style={{color: "black"}} />
              </NavLink>
              {/* <li class="nav-item dropdown notification-ui show">
                <a class="nav-link dropdown-toggle notification-ui_icon" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i class="fa fa-bell"></i>
                  <span class="unread-notification"></span>
                </a>
                <div class="dropdown-menu notification-ui_dd show" aria-labelledby="navbarDropdown">
                  <div class="notification-ui_dd-header">
                    <h3 class="text-center">Notification</h3>
                  </div>
                  <div class="notification-ui_dd-content">
                    <div class="notification-list notification-list--unread">
                      <div class="notification-list_detail">
                          <p><b>John Doe</b> reacted to your post</p>
                          <p><small>10 mins ago</small></p>
                      </div>              
                    </div>
                    <div class="notification-list notification-list--unread">        
                      <div class="notification-list_detail">
                        <p><b>Richard Miles</b> reacted to your post</p>
                        <p><small>1 day ago</small></p>
                      </div>            
                    </div>
                    <div class="notification-list">              
                      <div class="notification-list_detail">
                        <p><b>Brian Cumin</b> reacted to your post</p>
                        <p><small>1 day ago</small></p>
                      </div>             
                    </div>
                    <div class="notification-list">
                      <div class="notification-list_detail">
                        <p><b>Lance Bogrol</b> reacted to your post</p>
                        <p><small>1 day ago</small></p>
                      </div>      
                    </div>
                  </div>
                </div>
              </li> */}
              <h6>Hello, {data.name}</h6>
              <NavLink to="/profile">
                <i className="bi bi-person" style={{ fontSize: "110%", color:"black" }} />
              </NavLink>
          </div>
      </div>
    )
}
export default Header;