

    /**
     * Obtiene el texto ingresado en el input "Correo electrónico", sección "Login".
     * @returns String que contiene el correo electrónico ingresado por el usuario.
     */
function getEmail() {
    return document.getElementById("email").value;
}

/**
 * Obtiene el texto ingresado en el input "Usuario", sección "Login".
 * @returns String que contiene el nombre de usuario.
 */
function getUser() {
    return document.getElementById("username").value;
}

/**
 * Modifica el nombre de usuario logueado presentado en pantalla.
 * @param {String} username Nombre del usuario logueado.
 */
function setUser(username) {
    document.getElementById("loggedUsername").textContent = `¡Bienvenido ${username}!`;
}

/**
 * Obtiene el texto ingresado en el input "Contraseña", sección "Login".
 * @returns String que contiene la contraseña ingresada por el usuario.
 */
function getPassword() {
    return document.getElementById("password").value;
}

/**
 * Vacía el contenido de los inputs del login / registro.
 */
function clearLoginInputs() {
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    document.getElementById("username").value = "";
}

/**
 * Si se está mostrando la pantalla de login la oculta y muestra la de notas. Y viceversa.
 */
function changeScreen() {
    const notepad = document.getElementById("notepad");
    const loginForm = document.getElementById("loginForm");
    if (notepad.style.display !== "none") {
        notepad.style.display = "none";
        loginForm.style.display = "";
        this.clearAllNotes();
        this.clearSelect();
    }
    else {
        notepad.style.display = "";
        loginForm.style.display = "none";
    }
} 