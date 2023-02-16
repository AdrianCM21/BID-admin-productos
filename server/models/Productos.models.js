const mongoose = require("mongoose");

const ProductoShema = new mongoose.Schema({
    titulo: { type: String },
    precio: { type: Number},
    description:{type:String}
}, { timestamps: true });

module.exports.Producto = mongoose.model('Producto',ProductoShema);