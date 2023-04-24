import {Navigate, Router, Route, Redirect, Switch} from "react-router"
import Login from "./Login/Login"
import React, { useState } from 'react';
import Home from "../Component/Home/Home"

const useAuth = () => {
    const user = {loggedIn: true}
    return user.loggedIn;
    // const [isLoggedIn, setIsLoggedIn] = useState(false);
    // const handleLogin = () => {
    //     setIsLoggedIn(true);
    // }
}

const ProtectedRoutes = () => {
    const isAuth = useAuth();
    return isAuth ? <Home /> : <Navigate to ="/" />;
};

export default ProtectedRoutes;