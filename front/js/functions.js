let idLogged = -1  

function existsUser (email,password) { //creas la funcion y los() los parametros que recibe....i es una variable que cambia apra verificar los usuarios
    let i=0 // para instanciar i
    while(i < users.length){ // verificas que i sea menor a la longitud de la cant de usuarios
        if(users[i].email == email){ // si username es == a username de user
            if(users[i].password == password) // lo mismo con contra
                return users[i].idU; // si funciona retorna el el id
           else {
                return 0 //sino retorna 0 "error"
            }
        }
        i++;  
    } 
    return -1;
    
}


// EJERCICIO 7

function login() {
    let email = ui.getEmail(); //declaras el email y toma el email ingresado
    let password = ui.getPassword();
    let resultado = existsUser(email, password) // el res llama a la funcion de arriba
    if (resultado > 0) { //si resutaldo existe, 
        idLogged = resultado;// id logged ahora va a ser 4 (osea el user 4)
        ui.setUser(email);
        showNotes(idLogged)
        ui.changeScreen();// y cambia la pantalla de notas
    } else if (resultado == 0) {
        ui.showModal("Contraseña incorrecta, escribir nuevamente")
        idLogged = -1;
    } else {
        ui.showModal("TODO ES INCORRECTO")
        idLogged = -1;
    }
}


function newuser(email,password,username) {
    let resultado = existsUser(email, password)
    if (resultado <= 0) {
            users.push(new User (username, email, password))
            return users.length;
        } else {
            ui.showModal("Ese usuario ya existe")
            return -1;
        }
}
            


function registrar() {
    let username = ui.getUser();
    let email = ui.getEmail();
    let password = ui.getPassword();
    let resultado = newuser(email, password, username)
    if (resultado > 0) {
        login()
    } else {
        showModal("Usuario existente, inicie sesion o ingrese otro correo electrónico")
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