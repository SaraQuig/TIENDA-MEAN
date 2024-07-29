const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const { mongoose } = require('./config/db');
const app = express();
const port = process.env.PORT ||  3000;

//Nombre de la app el cual es tienda
app.set('nombreApp', 'Tienda');
app.set('puerto', port);

// Habilitar CORS para todas las rutas
app.use(cors());

app.use(morgan('dev'));
app.use(express.json()); // Usa express.json() en lugar de bodyParser.json()
app.use(bodyParser.urlencoded({ extended: true }));

// Usar las rutas de cliente
app.use('/api', require('./routes/order'));
app.use('/api/usuarios', require('./routes/usuario'));
app.use('/api/productos', require('./routes/producto'));

//conectandose al puerto
app.listen(port, () => {
    console.log('Nombre de la App', app.get('nombreApp'));
    console.log('Puerto del servidor', app.get('puerto'));
});
