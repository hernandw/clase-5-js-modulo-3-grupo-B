//Object Methods
const persona = {
  nombre: "Juan",
  edad: 30,
  profesion: "Desarrollador",
  saludar: function () {
    console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
  },
};

//Obtener las claves del objeto
const claves = Object.keys(persona)
//console.log(claves)


const valores = Object.values(persona)
//console.log(valores)

const pares = Object.entries(persona)
console.log(pares)