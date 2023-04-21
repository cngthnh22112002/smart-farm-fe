import { NavLink, useNavigate, Router } from 'react-router-dom';
import Login from "./Component/Login/Login"
// import Register from "./Component/Register/Register"
import ProtectedRoutes from "./Component/ProtectedRoutes.js"
// import ProtectedRoute from "./utils/ProtectedRoute"
import React from "react"
import Home from "./Component/Home/Home"
import {  BrowserRouter, Route, Routes } from "react-router-dom"
import {Navigate} from "react-router"


function App() {
  return (
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route element = {<ProtectedRoutes/>}>
            <Route path="/home" element={<Home />} />
          </Route> 
          
        </Routes>
      </div>
  );
}

export default App