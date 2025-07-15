let idLogged = -1  


async function existsUser(nombre,password) { //creas la funcion y los() los parametros que recibe....i es una variable que cambia apra verificar los usuarios
    try {
        console.log(10)
        const response = await fetch(`http://localhost:4000/buscarUsuario`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({nombre_usuario: nombre, contraseña: password})
        })
        let result = await response.json()
        console.log(result)
        return result
    } catch (error) {
        console.log(error, "hola no funciono")
    }
} 


    


async function conseguirID(nombre) { //creas la funcion y los() los parametros que recibe....i es una variable que cambia apra verificar los usuarios
        try {
            const response = await fetch(`http://localhost:4000/conseguirID`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({nombre_usuario: nombre})

            })
            let result = await response.json()
            console.log(result)
            return result
        } catch (error) {
            console.log(error)
        }
    } 

    async function esAdmin(nombre) { //creas la funcion y los() los parametros que recibe....i es una variable que cambia apra verificar los usuarios
        try {
            const response = await fetch(`http://localhost:4000/esAdmin`, { //cambiar la url para que sea pedido get
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({nombre_usuario: nombre})
            })
            let result = await response.json()
            console.log(result)
            if (result.length > 0) {
                return result[0].es_admin //solo manda el numero
            } else {
                return -1
            }
        } catch (error) {
            console.log(error)
        }
    } 

    async function newuser(username,password) {
    let resultado = existsUser(username,password)
    if (resultado <= 0) {
            users.push(new User (username, password))
            return users.length;
        } else {
            ui.showModal("Ese usuario ya existe")
            return -1;
        }
}
 //ya está registrar
/*
async function login() {
    try {
        let nombre = ui.getUsername();       // Obtener el usuario
        let password = ui.getPassword(); // Obtener la contraseña
        console.log(nombre, password)
        let resultado = await existsUser(nombre, password)  
        console.log(resultado)

        if (resultado.length > 0) {
            idLogged = await conseguirID(nombre)
            let admin = await esAdmin(nombre)
            console.log(admin)
            if (admin > 0) {
                ui.clearLoginInputs()
                console.log("es admin y entro al juego")
                /* ui.changescreenAdmin() */ 
            //} else {
              //  ui.clearLoginInputs()
                //console.log("no es admin y entro al juego")
                /*
                ui.changeScreen() 
            }

            //ui.changeScreen() va aca porque cambia la pantalla sea admin o no
        } else {
            console.log("no entro")
            idLogged = -1
        }
    } catch (error) {
        console.log(error)
    }
}*/
            

async function registrar() {
    let nombre_usuario = ui.getUsername();
    let contraseña = ui.getPassword();

    const datos = {
        nombre_usuario:nombre_usuario,
        contraseña:contraseña,
        es_admin: false
    }
    
    try {
        const response = await fetch(`http://localhost:4000/guardarUsuarios`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(datos)
        });

        let result = await response.json();
        console.log(result);
        if (result.length > 0) {
            login()
        } else {
            console.log("error")
            console.log("Usuario existente, inicie sesion o vuelva a intentar")
        }
    } catch (error) {
        console.log(error)
    }

}

function cerrarsesion(){
    if (confirm("¿Queres cerrar sesion?") == true) {
        idLogged = -1
        ui.clearLoginInputs()
        ui.changeScreen()
        ui.showModal("Cerraste sesion")
    } else {
        ui.showModal("Seguis en sesion")
    }

}



async function login() {
    try {
        let nombre = ui.getUsername();       // Obtener el email del usuario
        let password = ui.getPassword(); // Obtener la contraseña
        console.log(nombre, password)
        let resultado = await existsUser(nombre, password)  
        console.log(resultado)
        if (resultado.length > 0) {
            idLogged = await conseguirID(nombre)
            let admin = await esAdmin(nombre)
            console.log(admin)
            if (admin > 0) {
                ui.clearLoginInputs()
                console.log("es admin y entro al juego")
                ui.changeScreenAdmin()
            } else {
                ui.clearLoginInputs()
                console.log("no es admin y entro al juego")
                ui.changeScreen() 
            }
        } else {
            console.log("no entro")
            idLogged = -1
        }
    } catch (error) {
        console.log(error)
    }
}


async function guardarCancion(nombre,nombreArt,reproducciones) { //creas la funcion y los() los parametros que recibe....i es una variable que cambia apra verificar los usuarios
    try {
        console.log(10)
        const response = await fetch(`http://localhost:4000/guardarCanciones`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({nombre_cancion: nombre, nombre_artista: nombreArt, nro_reproducciones: reproducciones})
        })
        let result = await response.json()
        console.log(result)
        return result
    } catch (error) {
        console.log("hola no funciono")
    }
} 

async function insertarCancion(){
    let nombre_cancion= ui.getNombre_cancion()
    let nombre_artista= ui.getNombre_artista()
    let nro_reproducciones= ui.getReproducciones()
    console.log(nombre_cancion, nombre_artista, nro_reproducciones)
    let resultado = await guardarCancion(nombre_cancion,nombre_artista,nro_reproducciones)
    console.log(resultado)
    /*if (resultado.length > 0) {
        console.log("Se inserto el usuario")
    } else {
        console.log("No se pudo insertar el usuario")
    } */
}