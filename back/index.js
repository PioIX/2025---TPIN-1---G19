var express = require('express'); //Tipo de servidor: Express
var bodyParser = require('body-parser'); //Convierte los JSON
var cors = require('cors');
const { realizarQuery } = require('./modulos/mysql');

var app = express(); //Inicializo express
var port = process.env.PORT || 4000; //Ejecuto el servidor en el puerto 3000

// Convierte una petición recibida (POST-GET...) a objeto JSON
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.get('/', function (req, res) {
    res.status(200).send({
        message: 'GET Home route working fine!'
    });
});

//Pongo el servidor a escuchar
app.listen(port, function () {
    console.log(`Server running in http://localhost:${port}`);
});


app.get('/iniciarSesion', async function (req,res) {
    await realizarQuery(`SELECT * FROM Usuarios WHERE email=${req.query.email} AND contraseña=${req.query.password}`)
    
    if (req.query.username != undefined) {
        changeScreen()
    } else {
        res.send("no existe un usuario con ese email y/o contraseña")
    }    
})