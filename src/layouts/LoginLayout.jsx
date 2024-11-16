import { Outlet } from "react-router-dom";


const LoginLayout = () => {
    return (
        <div>
            <h4>Login</h4>
            <Outlet></Outlet>
        </div>
    );
};

export default LoginLayout;