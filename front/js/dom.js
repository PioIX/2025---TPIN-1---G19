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

    clearLoginInputs() {
        document.getElementById("email").value = "";
        document.getElementById("password").value = "";
        document.getElementById("username").value = "";
    }

    /**
     * Si se está mostrando la pantalla de login la oculta y muestra la de notas. Y viceversa.
     */
    changeScreen() {
<<<<<<< Updated upstream
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



=======
        const gameScreen = document.getElementById("gameScreen");
        const loginForm = document.getElementById("loginForm");
        if (gameScreen.style.display !== "none") {
            gameScreen.style.display = "none";
            loginForm.style.display = "";
            this.clearAllNotes();
            this.clearSelect();
        }
        else {
            gameScreen.style.display = "";
            loginForm.style.display = "none";
        }
    } 
>>>>>>> Stashed changes
}

const ui = new UserInterface()