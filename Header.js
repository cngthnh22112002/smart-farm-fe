import React, { useState, useEffect }  from "react";
import { NavLink, useNavigate } from 'react-router-dom';

const Header = () => {
    
    return (
    <div>
        <div className="icon1" style={{marginBottom: '5px', background: "grey"}}>
            <i className="bi bi-question-circle" />
            <i className="bi bi-gear" />
            <NavLink to="/notify">
              <i className="bi bi-bell" style={{color: "black"}} />
            </NavLink>
            <h6>Hello, User</h6>
            <NavLink to="/profile">
              <i className="bi bi-person" style={{ fontSize: "110%", color:"black" }} />
            </NavLink>
          </div>
    </div>)
}

export default Header;