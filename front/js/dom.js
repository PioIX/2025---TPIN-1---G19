class UserInterface {
    constructor() {
        
    }

    /**
     * Obtiene el texto ingresado en el input "Correo electrónico", sección "Login".
     * @returns String que contiene el correo electrónico ingresado por el usuario.
     */
    getEmail() {
        return document.getElementById("email").value;
    }

    /**
     * Obtiene el texto ingresado en el input "Usuario", sección "Login".
     * @returns String que contiene el nombre de usuario.
     */
    getUser() {
        return document.getElementById("username").value;
    }

    /**
     * Modifica el nombre de usuario logueado presentado en pantalla.
     * @param {String} username Nombre del usuario logueado.
     */
    setUser(username) {
        document.getElementById("loggedUsername").textContent = `¡Bienvenido ${username}!`;
    }

    /**
     * Obtiene el texto ingresado en el input "Contraseña", sección "Login".
     * @returns String que contiene la contraseña ingresada por el usuario.
     */
    getPassword() {
        return document.getElementById("password").value;
    }

    /**
     * Vacía el contenido de los inputs del login / registro.
     */
    clearLoginInputs() {
        document.getElementById("email").value = "";
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

    changeScreenAdmin() {
        const admin = document.getElementById("adminPanel");
        const juego = document.getElementById("gameScreen");
        const loginForm = document.getElementById("loginForm");
        juego.style.display = 'none';
        loginForm.style.display = 'none';
        admin.style.display = 'block';
    } 
}



const ui = new UserInterface()