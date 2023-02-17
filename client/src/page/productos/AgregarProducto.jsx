import React from 'react'
import Formulario from '../../components/Formulario'
import axios from 'axios';
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';

const AgregarProducto = () => {
  const navigate = useNavigate();
  const valorInicial={
    titulo:'',
    precio:0,
    description:''
}
  const envio= async (values,actions)=>{
    try {
        console.log(process.env.REACT_APP_API_URL);
        const producto = await axios.post(`${process.env.REACT_APP_API_URL}/api/producto`,values)
        if (producto.status === 200){
          Swal.fire({
              icon: 'success',
              title: 'GENIAL!!!',
              text: `Se ha actualizado ${producto.data.nombre} perfectamente!`,
          });

          navigate('/');
      }
        
    } catch (error) {
        console.log(error);
        Swal.fire({
            icon: 'error',
            title: 'Ops que mal!!!',
            text: `Error: ${error?.response?.data?.message || error.message}`,
        })
    }
  }


  return (
    <Formulario valorInicial={valorInicial} envio={envio}/>
  )
}

export default AgregarProducto