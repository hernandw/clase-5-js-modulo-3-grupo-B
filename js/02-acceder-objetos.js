const persona = {
  nombre: "Josefa",
  edad: 28,
  email: "josefa@gmail.com",
  saludar: function () {
    return "Hola, muy buenas tardes";
  },
};

//con arrow function

const persona2 = {
  nombre: "Josefa",
  edad: 28,
  email: "josefa@gmail.com",
  saludar: (usuario) => {
    return `Hola, muy buenas tardes desde personas 2 ${usuario}`;
  },
};

const persona3 = {
  "nombre Completo": "Josefa",
  edad: 28,
  email: "josefa@gmail.com",
  saludar: () => "Hola, muy buenas tardes desde personas 3",
};

//Notacion de puntos

/* console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.email);
console.log(persona.saludar());
console.log(persona2.saludar("Juan"));
console.log(persona2.saludar("Francisco"));
console.log(persona3.saludar());
 */
//Notacion Corchetes

console.log(persona3["nombre Completo"])
console.log(persona["edad"])
console.log(persona["email"])



