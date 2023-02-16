import React,{useEffect,useState} from 'react'
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
const DetalleProducto = () => {
  const {id} = useParams();
  const [detalle, setDetalle] = useState([]);

  useEffect(() => {
    const Obtener = async()=>{
        const respuesta = await axios.get(`${process.env.REACT_APP_API_URL}/api/producto/${id}`);
        setDetalle(respuesta.data);
    }
    Obtener();
  }, [id])
  console.log(detalle)

  return (
   <>
      <div className="card col-sm-4 mb-3 mb-sm-0" >
      <div className="card-body">
        <h5 className="card-title">{detalle.titulo} </h5>
        <h6 className="card-subtitle mb-2 text-muted">{detalle.precio}<span> Gs</span></h6>
        <p className="card-text">{detalle.description}</p>
        <Link to={'/'} className="btn btn-primary">Volver</Link>
      </div>
    </div>
   </>
  )
}

export default DetalleProducto