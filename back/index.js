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

// ACA EMPIEZA EL TRABAJO NUESTRO



/*app.post('/obtenerDatosRegistro'), async function (req,res) {
    try {
         await realizarQuery(`
        ('INSERT INTO Usuarios (nombre_usuario, contraseña, es_admin) VALUES ('${req.body.nombre_usuario}', '${req.body.contraseña}', '${req.body.es_admin}');')
    `)
    res.send("se agrego correctamente")
    } catch(error){
        console.log(error);
    }

}*/

// REGISTRO USUARIOS

app.post('/guardarUsuarios', async function (req,res) {

    try {
        const resultado = await realizarQuery(`SELECT * From Usuarios WHERE email = '${req.body.email}' `)

        if (resultado.length==0){
            res.send("ya existe un usuario con ese email")
        } else {
            await realizarQuery(` ('INSERT INTO Usuarios (nombre_usuario, contraseña, email, es_admin) VALUES ('${req.body.user}', '${req.body.password}', '${req.body.email}', '${req.body.es_admin}');') `)
        }
    } catch (error) {
        res.send(error)
    }
})