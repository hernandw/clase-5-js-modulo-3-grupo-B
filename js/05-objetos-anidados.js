const persona = {
  nombre: "Josefa",
  edad: 28,
  email: "josefa@gmail.com",
  informacion: {
    ciudad: "Valparaiso",
    nacimiento: 2000,
    hoobies: {
      deportes: "Natacion",
      frecuencia: 5,
    },
  },
  saludar: function () {
    return "Hola, muy buenas tardes";
  },
};

//notacion de puntos

console.log(persona.nombre);
console.log(persona.informacion.ciudad);

console.log(persona.informacion.hoobies.deportes);

const numero = [1, 2, 5, 8];

//console.log(numero)

//const { nombre, edad, ciudad } = persona

/* const {
  nombre,
  edad,
  informacion: { nacimiento, ciudad },
} = persona; */

const {
  nombre,
  edad,
  informacion: {
    nacimiento,
    ciudad,
    hoobies: { frecuencia },
  },
} = persona;

console.log(nombre);
console.log(edad);
console.log(ciudad);
console.log(nacimiento);
console.log(frecuencia);
