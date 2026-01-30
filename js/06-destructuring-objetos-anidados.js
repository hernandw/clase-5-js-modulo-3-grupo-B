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
