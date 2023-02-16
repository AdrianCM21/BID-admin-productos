import React from 'react'
import {Formik,Form,Field} from 'formik'
import * as Yup from 'yup';
import axios from 'axios';
import Swal from 'sweetalert2'

const Formulario = () => {
    const valorInicial={
        titulo:'',
        precio:0,
        description:''
    }
    const envio= async (values,actions)=>{
        try {
            console.log(process.env.REACT_APP_API_URL);
            const producto = await axios.post(`${process.env.REACT_APP_API_URL}/api/producto`,values)
            Swal.fire({
            title: 'Exito',
            html: 'Se agrego correctamentes',
            icon: 'success'
            })
            actions.resetForm(valorInicial);
        } catch (error) {
            console.log(error);
        }
    }


    const productoError=Yup.object().shape({
        titulo: Yup.string()
            .min(5, 'El Titulo debe tener como minimo 5 caracteres')
            .required('Requerido'),
        precio: Yup.number()
            .integer('Debe ser numero entero')
            .required('No puede ir vacio')
            .positive('No puede ser negativo'),
            
        description: Yup.string()
            .required('El apellido es requerido.')
            .min(5, 'Se necesita como minumo 5 caracteres.')
    });

  return (
    <>
        <Formik
        enableReinitialize={true}
        initialValues={valorInicial}
        validationSchema={productoError}
        onSubmit={envio}
        >
        {({ errors, touched, isValid, dirty })=>(
             <Form>
             <Field name="titulo" className="form-control" placeholder="Titulo" />
             {touched.titulo && errors.titulo && <div className="ms-3 mt-1 text-danger">{errors.titulo}</div>}
             <Field name="precio" type="number" className="form-control mt-2" placeholder="Precio"/>
             {touched.precio && errors.precio && <div className="ms-3 mt-1 text-danger">{errors.apellido}</div>}
             <Field name="description"  className="form-control mt-2" placeholder="Description" />
             {touched.description && errors.description && <div className="ms-3 mt-1 text-danger">{errors.description}</div>}
             <button className="btn btn-primary mt-5" disabled={!(isValid&&dirty)}>Guardar</button>
         </Form>
        )}
        </Formik>  
    </>
  )
}

export default Formulario