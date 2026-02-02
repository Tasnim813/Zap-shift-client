import { createBrowserRouter } from "react-router";
import RootLoayout from "../Layout/RootLoayout";
import Home from "../pages/Home/Home/Home";

export const router=createBrowserRouter([
    {
        path:"/",
        Component:RootLoayout,
        children:[
            {
                index:true,
                Component:Home

            }
        ]
    }
]);