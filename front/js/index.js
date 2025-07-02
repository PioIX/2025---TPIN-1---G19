async function login () {
    let email = document.getElementById("email")
    let password = document.getElementById("password")

    const datos = {
        email: email,
        password: password
    }

    const response = await fetch (`http://localhost:4000/iniciarSesion`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
        body:JSON.stringify(datos)
    })
}
