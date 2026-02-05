import { createBrowserRouter } from "react-router";
import RootLoayout from "../Layout/RootLoayout";
import Home from "../pages/Home/Home/Home";
import Coverage from "../pages/Coverage/Coverage";
import AboutUs from "../pages/AboutUs/AboutUs";

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
            }
        ]
    }
]);