import React from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

const EliminarProducto = ({id,borrador}) => {
    const eliminar=async(idProducto)=>{
        try {
            const producto = await axios.delete(`${process.env.REACT_APP_API_URL}/api/producto/eliminar/${idProducto}`);
            console.log(producto);
            borrador(idProducto);
            Swal.fire(
                'Borrado!',
                `Se a eliminado ${producto.data.deletedCount} porductos`,
                'success'
              )
        } catch (error) {
            console.log(error);
            Swal.fire({
                icon: 'error',
                title: 'Ops que mal!!!',
                text: `Error: ${error?.response?.data?.message || error.message}`,
            })
        }
    }

    const Delete =(idProducto)=>{
        Swal.fire({
          title: 'Advertencia',
          text: "Seguro que desea eliminar este elemento no podra volver a recuperarlo!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Si, Estoy seguro!'
        }).then((result) => {
          if (result.isConfirmed) {
            eliminar(idProducto);
          }
        })
      }
  return (
    <button className='btn btn-danger  ms-2' onClick={()=>Delete(id)}>Eliminar</button>
  )
}

export default EliminarProducto