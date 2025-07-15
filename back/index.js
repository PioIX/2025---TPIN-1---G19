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

app.post('/guardarUsuarios', async function (req,res) {
    try {
         await realizarQuery(`
        ('INSERT INTO Usuarios (nombre_usuario, contraseña, es_admin) VALUES ('${req.body.nombre_usuario}', '${req.body.contraseña}', '${req.body.es_admin}');')
    `)
    res.send("se agrego correctamente")
    } catch(error){
        console.log(error);
    }

})

app.post('/buscarUsuario', async function(req,res){
    console.log(req.body.nombre_usuario)
    try {
        response = await realizarQuery(`
            SELECT * FROM Usuarios WHERE nombre_usuario = '${req.body.nombre_usuario}' and contraseña = '${req.body.contraseña}'     
        `)
        console.log(response)
    } catch (error) {
        console.log(error)
    }
})

app.post('/conseguirID', async function(req,res){
    
    try {
        response = await realizarQuery(`
        SELECT idU FROM Usuarios WHERE nombre = '${req.body.nombre_usuario}'     
    `)

    res.json(response)
    } catch (error) {
        console.log(req.body.nombre_usuario)
        res.json("error en el conseguirID")
    }

})

app.post('/esAdmin', async function(req,res){
    console.log(req.body)
    try {
       response = await realizarQuery(`
        SELECT es_admin FROM Usuarios WHERE nombre = '${req.body.nombre_usuario}'     
    `)
    res.json(response) 
    } catch (error) {
        res.json("error en el admin")   
    }
})

app.get('/traerReproducciones', async function(req,res){
    response = await realizarQuery(`
        SELECT nombre_cancion, nombre_artista, nro_reproducciones FROM Canciones ORDER BY RAND()
        `
    )
    res.send({response : response})
})
