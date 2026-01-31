const persona = {
    nombre: "Juan",
    edad: 25,
    email: "juan@gmail.com"

}


const contacto ={
    telefono: "123-456-789",
    pais: "Chile",
    codigo: "+56"
}

//console.log(persona)
//console.log(contacto)

//Unir dos objetos con el Object.assign()

/* const empleado = Object.assign(persona, contacto)
console.log(persona)
console.log(contacto) */

console.log("************************")

//unir dos objecto con el operador spread o rest operator

const cliente = {...persona, ...contacto}

console.log(cliente)
console.log(persona)
console.log(contacto)

const usuario = {...persona}
console.log("************************")
console.log(usuario)

