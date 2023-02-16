import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import AgregarProducto from "../page/productos/AgregarProducto";
import DetalleProducto from "../page/productos/DetalleProducto";
import Productos from "../page/productos/Productos";

export default createBrowserRouter([{
    path:'/',
    element:<Layout/>,
    children:[
        {
            index: true,
            element: <Productos/>
        }
        ,{
            path:'/producto/agregar',
            element:<AgregarProducto/>
        },{
            path:'producto/detalle/:id',
            element:<DetalleProducto/>
        }
    ]
}])