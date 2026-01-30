//Destructuring de objetos ES6

const persona = {
  nombre: "Josefa",
  edad: 28,
  email: "josefa@gmail.com",
  saludar: function () {
    return "Hola, muy buenas tardes";
  },
};



const { nombre, edad, email } = persona;


console.log(nombre);
console.log(edad);


const producto = {
  titulo: "monitor de 20 pulgadas",
  precio: 100,
  stock: 10,
  disponible: true,
};

const { titulo, precio} = producto

console.log(titulo)
console.log(precio)