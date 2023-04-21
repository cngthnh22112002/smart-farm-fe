import {Outlet, Navigate} from "react-router"
import Login from "./Login/Login"

const useAuth = () => {
    const user = {loggedIn: false}
    return user && user.loggedIn;
}

const ProtectedRoutes = () => {
        const isAuth = useAuth();
    return isAuth ? <Outlet /> : <Navigate to ="/" />;
};

export default ProtectedRoutes;