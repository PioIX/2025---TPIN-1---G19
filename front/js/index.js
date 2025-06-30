async function registrarUsuario (req,res) { 
    let email = getEmail();
    let password = getPassword();
    let user = getUser();

    const datos = {
        password:password,
        email:email,
        user:user
    }


    const response = await fetch (`http://localhost:4000/guardarUsuarios`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",

        },
        body:JSON.stringify(datos)
    })
    
    const result = await response.json()
    alert("se guardó correctamente", result)
    
}