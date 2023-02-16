const Control = require('../controllers/Productos.controller');

module.exports = (app)=>{
    app.post("/api/producto",Control.createProducto);
}

