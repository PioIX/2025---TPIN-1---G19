function login() {
    let email = ui.getEmail();
    let password = ui.getPassword();
    let resultado = existsUser(email, password); // email y password es lo que se obtiene con getPassword y getEmail
    if (resultado > 0) {
        idLogged = resultado;
        ui.setUser(users[resultado - 1].nombreUsuario)
        ui.changeScreen();
        mostrarNotas(idLogged)
    } else if (resultado == 0) {
        ui.showModal("Password incorrecta", "escriba nuevamente")
        idLogged = -1
    } else {
        ui.showModal("los datos son incorrectos", "ingrese nuevamente");
        idLogged = -1
    }
}