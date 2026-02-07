import { createBrowserRouter } from "react-router";
import RootLoayout from "../Layout/RootLoayout";
import Home from "../pages/Home/Home/Home";
import Coverage from "../pages/Coverage/Coverage";
import AboutUs from "../pages/AboutUs/AboutUs";
import AuthLayout from "../Layout/AuthLayout";
import Login from "../pages/Auth/Login/Login";
import Register from "../pages/Auth/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Rider from "../pages/Rider/Rider";
import SendParcel from "../pages/SendParcel/SendParcel";

export const router=createBrowserRouter([
    {
        path:"/",
        Component:RootLoayout,
        children:[
            {
                index:true,
                Component:Home

            },
            {
                path:"/coverage",
                Component:Coverage,
                loader:()=>fetch('/ServiceCenter.json').then(res=>res.json())
                
            },
            {
                path:'/about',
                Component:AboutUs
            },
            {
                path:'/rider',
                element:<PrivateRoute><Rider></Rider></PrivateRoute>
            },
            {
                path:'/sendParcel',
                element:<PrivateRoute><SendParcel></SendParcel></PrivateRoute>
            }
        ]
    },
    {
        path:"/",
        Component:AuthLayout,
        children:[
            {
                path:'login',
                Component: Login
            
            },
            {
                path:'register',
                Component:Register
            }
        ]
    }
]);