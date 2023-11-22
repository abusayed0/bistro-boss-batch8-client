import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/main/Main";
import Home from "../pages/home/home/Home";
import Menu from "../pages/menu/menu/Menu";
import Order from "../pages/order/order/Order";
import Login from "../pages/login/Login";
import SignUp from "../pages/sign-up/SignUp";
import Secret from "../shared-components/secret/Secret";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../layouts/dashboard/Dashboard";
import Cart from "../pages/dashboard/cart/Cart";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/menu",
                element: <Menu/>
            },
            {
                path: "/order/:category",
                element: <Order/>
            },
            {
                path: "/login",
                element: <Login/>
            },
            {
                path: "/signup",
                element: <SignUp/>
            },
            {
                path: "/secret",
                element: <PrivateRoute><Secret/></PrivateRoute>
            }
        ],
    },
    {
        path: "/dashboard",
        element: <Dashboard/>,
        children: [
            {
                path: "/dashboard/cart",
                element: <Cart/>
            }
        ]
    }
]);

export default router;