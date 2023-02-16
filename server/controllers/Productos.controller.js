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