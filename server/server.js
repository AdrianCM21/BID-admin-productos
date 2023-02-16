require('dotenv').config()
const express = require('express');
const cors = require('cors') // This is new
const app = express();

require('./config/Productos.config');
app.use(cors()) // This is new
app.use(express.json()); // This is new
app.use(express.urlencoded({ extended: true }));
require('./routes/Productos.routes')(app);

app.listen(8000,()=>{
    console.log('Conectado exitosa mente')
})