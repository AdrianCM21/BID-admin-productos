import React,{useEffect,useState} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const Productos = () => {
  const [producto, setProducto] = useState([])
  useEffect(() => {
    const Obtener= async ()=>{
      const auxProducto = await axios.get(`${process.env.REACT_APP_API_URL}/api/producto`);
      setProducto(auxProducto.data.prod);
    }
    Obtener();
  }, [])
  
  return (
    <>
      <h1>Productos</h1>
      <ul className='list-group col-sm-4 mb-3 mb-sm-0'>
      {
        producto.map((producto,idx)=> <li className="list-group-item mt-2" key={idx}>{producto.titulo}<Link className='btn btn-success ms-2' to={`/producto/detalle/${producto._id}`}>Detalle</Link></li>
        )
      }
      </ul>
      <Link to="/producto/agregar" className="btn btn-primary">Agregar Persona</Link>
    </>
  )
}

export default Productos