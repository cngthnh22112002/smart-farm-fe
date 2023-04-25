import React from "react";

const Navbar = () => {
    return(
        <div className="header" style={{ backgroundColor: "#FBEAAB" }}>
          <div className="logo">
            <img src="logoyolofarm.png" alt="logo"/>
            <h1>Yolo Farm</h1>
          </div>
          <div className="icon1">
            <i className="bi bi-question-circle" />
            <i className="bi bi-gear" />
            <i className="bi bi-bell"/>
            <h6>Hello, User</h6>
            <i className="bi bi-person" style={{ fontSize: "110%" }} />
          </div>
        </div>
    )
}
export default Navbar;