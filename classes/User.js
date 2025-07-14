let idUser=1

class User{
    constructor(nombre_usuario,contraseña,email,es_admin){
        this.idUser=idUser
        idUser++
        this.nombre_usuario=nombre_usuario
        this.contraseña=contraseña
        this.email=email
        this.es_admin=es_admin
    }
}

const users=[];
users.push(new User("bauti", "123","bauti@gmail.com",true))
users.push(new User("emma", "11","emma@gmail.com",true))
users.push(new User("cami", "12","cami@gmail.com",true))
users.push(new User("sebas", "123","sebas@gmail.com",true))
users.push(new User("mati", "123","a",false))