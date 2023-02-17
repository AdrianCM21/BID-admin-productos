const Control = require('../controllers/Productos.controller');

module.exports = (app)=>{
    app.get("/api/producto",Control.mostrarProducto);
    app.post("/api/producto",Control.createProducto);
    app.get("/api/producto/:id",Control.mostrarUnProducto);
    app.put("/api/producto/actulizar/:id",Control.actualizarProducto);
    app.delete("/api/producto/eliminar/:id",Control.EliminarProducto);
}

