import {Navigate} from "react-router"
// import Login from "./Login/Login"
import Home from "./Home/Home";

const useAuth = () => {
    const user = {loggedIn: true}
    return user.loggedIn;
}

const ProtectedRoutes = () => {
    const isAuth = useAuth();
    return isAuth ? <Home /> : <Navigate to ="/" />;
};

export default ProtectedRoutes;