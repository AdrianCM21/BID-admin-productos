import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../page/Home";

export default createBrowserRouter([{
    path:'/',
    element:<Layout/>,
    children:[
        {
            index: true,
            element: <Home/>
        },
    ]
}])