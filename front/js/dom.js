class UserInterface {
    constructor() {
        
    }
    getEmail() {
        return document.getElementById("email").value;
    }

    getUsername() {
        return document.getElementById("username").value;
    }

    setUser(username) {
        document.getElementById("loggedUsername").textContent = `¡Bienvenido ${username}!`;
    }

    getPassword() {
        return document.getElementById("password").value;
    }
    getNombre_artista() {
        return document.getElementById("nombre_artista").value;
    }
    getNombre_cancion() {
    return document.getElementById("nombre_cancion").value;
    }
    getReproducciones() {
    return document.getElementById("nro_reproducciones").value;
    }

    getSelectCanciones(){
        return document.getElementById("selectCanciones").value;
    }

    getSelectModificar(){
        return document.getElementById("campoModificar").value;
    }

    getInput(){
        return document.getElementById("ingresoPut").value;
    }

    getselectCancionesDelete(){
        return document.getElementById("selectCancionesDelete").value
    }


    clearLoginInputs() {

        //document.getElementById("email").value = "";

        document.getElementById("password").value = "";
        document.getElementById("username").value = "";
    }

    /**
     * Si se está mostrando la pantalla de login la oculta y muestra la de notas. Y viceversa.
     */
    changeScreen() {
        const juego = document.getElementById("gameScreen");
        const loginForm = document.getElementById("loginForm");
        loginForm.style.display = 'none';
        juego.style.display = 'block';
    } 


    changeScreenLogin(){
        const juego = document.getElementById("gameScreen");
        const loginForm = document.getElementById("loginForm");
        juego.style.display = 'none';
        loginForm.style.display = 'block';
    }


    changeScreenAdmin() {
        const admin = document.getElementById("adminPanel");
        const juego = document.getElementById("gameScreen");
        const loginForm = document.getElementById("loginForm");
        juego.style.display = 'none';
        loginForm.style.display = 'none';
        admin.style.display = 'block';


        console.log("entro a admin")
    }

    /*changeScreenRegistro() {
        const juego = document.getElementById("gameScreen");
        const registroForm = document.getElementById("registroForm");
        juego.style.display = 'none';
        registroForm.style.display = 'block';
    }*/
    
}


const ui = new UserInterface()

