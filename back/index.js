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
<<<<<<< Updated upstream
            await realizarQuery(`
        ('INSERT INTO Usuarios (nombre_usuario, contraseña, es_admin) VALUES ('${req.body.nombre_usuario}', '${req.body.contraseña}', '${req.body.es_admin}');')
    `)
    res.send("se agrego correctamente")
=======
        let resultado=await realizarQuery(`SELECT * FROM Usuarios WHERE nombre_usuario = '${req.body.nombre_usuario}'`);

        if (resultado.length>0){
            res.send("ya existe el usuario")
        } else {
            await realizarQuery(`INSERT INTO Usuarios (nombre_usuario, contraseña, es_admin) VALUES ('${req.body.nombre_usuario}', '${req.body.contraseña}', '${req.body.es_admin}');`)
            res.send("ok")
        }
>>>>>>> Stashed changes
    } catch(error){
        console.log(error);
        res.send(error)
    }

})

app.get('/buscarUsuario', async function(req,res){
    console.log(req.query.nombre_usuario)
    try {
<<<<<<< Updated upstream
        const response = await realizarQuery(`
            SELECT * FROM Usuarios WHERE nombre_usuario = '${req.body.nombre_usuario}' and contraseña = '${req.body.contraseña}'     
        `)
=======
        const response = await realizarQuery(`SELECT * FROM Usuarios WHERE nombre_usuario = '${req.query.nombre_usuario}' and contraseña = '${req.query.contraseña}'`)
>>>>>>> Stashed changes
        console.log(response)
        res.send(response)
    } catch (error) {
        console.log(error)
    }
})

<<<<<<< Updated upstream
app.post('/conseguirID', async function(req,res){
    const response = await realizarQuery(`
        SELECT id FROM Usuarios WHERE nombre_usuario = '${req.body.nombre_usuario}'     
    `)
    console.log(response)
    res.send(response)
=======
app.get('/conseguirID', async function(req,res){
    try {
        const response = await realizarQuery(`SELECT idUsuario FROM Usuarios WHERE nombre_usuario = '${req.query.nombre_usuario}`)
        console.log(response)
        res.send(response)
    } catch (error) {
        console.log(error)
    }
>>>>>>> Stashed changes
})

app.post('/esAdmin', async function(req,res){
    const response = await realizarQuery(`
        SELECT es_admin FROM Usuarios WHERE nombre_usuario = '${req.body.nombre_usuario}'     
    `)
    console.log(response)
    res.send(response)
})

app.get('/usuarios', async function(req,res){
    const response = await realizarQuery(`
        SELECT * FROM Usuarios   
    `)
    console.log(response)
    res.send(response)
})





