import React,{useEffect,useState} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import EliminarProducto from '../../components/EliminarProducto';

const Productos = () => {
 

  const [producto, setProducto] = useState([])
  useEffect(() => {
    const Obtener= async ()=>{
      const auxProducto = await axios.get(`${process.env.REACT_APP_API_URL}/api/producto`);
      setProducto(auxProducto.data.prod);
    }
    Obtener();
  }, [])

  const borrador = (idPoducto)=>{
    setProducto(producto.filter((prod)=>prod._id !== idPoducto));
  }
  
  return (
    <>
      <h1>Productos</h1>
      <ul className='list-group col-sm-8 mb-3 mb-sm-0'>
      {
        producto.map((producto,idx)=> <li className="list-group-item list-group-item d-flex justify-content-between align-items-start" key={idx}>
            {producto.titulo}
            <div>
              <Link className='btn btn-success  ms-2' to={`/producto/detalle/${producto._id}`}>Detalle</Link>
              <Link className='btn btn-primary  ms-2' to={`/producto/actualizar/${producto._id}`}>Actualizar</Link>
              <EliminarProducto id={producto._id} borrador={borrador}/>
            </div>
          </li>
        )
      }
      </ul>
      <Link to="/producto/agregar" className="btn btn-primary">Agregar Persona</Link>
    </>
  )
}

export default Productos