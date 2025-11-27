import { createBrowserRouter } from "react-router";
import RootLayat from "../Layaot/RootLayat";
import Home from "../Pages/Home/Home";
import Coverage from "../Component/Coverage/Coverage";
import About from "../Component/About/About";
import ErrorPage from "../Component/Errorpage/ErrorPage";
import AuthLayout from "../Layaot/AuthLayout";
import Login from "../Auth/Login/Login";
import Register from "../Auth/Register/Register";
import PrivateRoutes from "./PrivateRoutes";
import Rider from "../Component/Rider/Rider";
import SendPercel from "../Component/SendPercel/SendPercel";
import DashboardLayout from "../Layaot/DashboardLayout";
import MyParcel from "../Pages/Dashbord/MyParcel/MyParcel";



export const router=createBrowserRouter([
    {
        path:'/',
        Component:RootLayat,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                index:true,
                Component:Home
            },
            {
                path:'/coverage',
                Component:Coverage,
                loader:()=>fetch('/servicecenter.json').then(res=>res.json())
            },
            {
                path:'/about',
                Component:About
            },
            {
                path:'/rider',
                element:<PrivateRoutes><Rider></Rider></PrivateRoutes>
                

            },
            {
                path:"/send-percel",
                element:<PrivateRoutes>
                    <SendPercel></SendPercel>
                </PrivateRoutes>,
                loader:()=>fetch('/servicecenter.json').then(res=>res.json())
            }
        ]
    },
    {
        path:'/',
        Component:AuthLayout,
        children:[
            {
                
                path:'login',
                Component:Login
            },
            {
                path:"register",
                Component:Register
            }
        ]
    },
    {
        path:'dashboard',
        element:<PrivateRoutes>
            <DashboardLayout></DashboardLayout>
        </PrivateRoutes>,
        children:[
            {
                path:'my-parcels',
                Component:MyParcel
            }
        ]
    }
])