const {Producto} = require("../models/Productos.models")


module.exports.createProducto = async (request, response) => {
    try{
    const { titulo, precio, description } = request.body;
    console.log(titulo, precio, description)
    const prod = await Producto.create({
        titulo, 
        precio,
        description
    });
    response.json(prod);
    console.log(prod);
    } catch(err){response.json(err) } ;
}

module.exports.mostrarProducto = async (request, response)=>{
    try {
        const prod = await Producto.find()
        response.json({prod})
    } catch (error) {
        response.json(error);
    }
}

module.exports.mostrarUnProducto = async (request, response) => {
    try {
        const producto = await Producto.findOne({_id:request.params.id})
        response.json(producto );
    } catch (error) {
        response.json(error);
    }
}
