let nombre = "Pedro";
let edad = 50;

const persona = {
  nombre: "Josefa",
  edad: 28,
  email: "josefa@gmail.com",
  saludar: function () {
    return `mi nombre es ${this.nombre} y mi edad es: ${this.edad}`;
  },
};

const empleado = {
  nombre: "Josefa",
  edad: 28,
  email: "josefa@gmail.com",
  saludar: () => `mi nombre es ${nombre} y mi edad es: ${edad}`,
};

console.log(empleado.saludar());
