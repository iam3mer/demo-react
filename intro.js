// JavaScript
// Caractetisticas
// imperativo: su sintaxis derivada de la líne del lenguaje C/C++
// funcional: las funciones se pueden manipular como cualquier otra entidad dentro de un programa
// dinámico: existen 6 tipos de datos que se chequean y convierten dinamicamente: Boolean,
// Number, String, Object, undefined y null
// orientado a objetos: el objeto es el tipo de dato fundamental
// herencia basada en prototipos: cada objeto tiene referencia a un objeto base o prototipo,
// desde el cual hereda propiedades

// Consideraciones
// Boolean
// 0, "", null, undefined -> false
// {}, [] -> true

// Number
// Los numeros son representados como flotantes de doble precisión 
// 0.1 + 0.2 = 0.30000000000000004

// String
// No existe el concepto de caracter, todas las cadenas son String

// Object
// Todos los objetos son conjuntos asociativos. Las funciones tambien son objetos

// undefined
// Valor de las propiedades no definidas de un objeto

// null
// Es un obejeto que representa al objeto nulo. {} es un objeto sin propiedades, no es un 
// objeto nulo

// Programación Funcional
// estilo imperativo
// el estado del proceso se mantiene en la variable (i)
// const tripulantes = ["Alvaro", "Juan", "Maria"]
// for (let i = 0; < tripulantes.length; i++) {
//   procesar(tripulantes[i]);
// }

// estilo funcional
// tripulantes.forEach(procesar);

// A partir de un array de numeros enteros, desarrollar una función que devuelva
// la cantidad de 3
const number = [4,3,576,67,6867,3,4,3,34,5,3,33,8]

function cuenta3 (listNumber) {
  return listNumber.filter(number => number === 3).length
}

function es3(value) {
  return value === 3;
}

function contantarSi(fun, listNumber) {
  return listNumber.filter(number => fun(number)).length
}

contantarSi(es3, number);

function contantarSi(fun, listNumber) {
  const reducer = (valorPrevio, valorActual) => valorPrevio + valorActual;
  return listNumber.map(number => fun(number)).reduce(reducer);
}

contantarSi(es3, number);

// Alcance
const variableGlobal = "global";

function verificaAlcance() {
  const variableLocal = "local";

  console.log(variableGlobal)
  console.log(variableLocal)
}

console.log(variableGlobal)
console.log(variableLocal) // Error de referencia

// Hoisting
function hoisting () {
  console.log(ciudad);
  const ciudad = "Pereira";
  console.log(ciudad);
}

// Clousure
function prefijar(prefijo) {
  const str = `${prefijo} `

  return function (nombre) {
    return `${str}${nombre}`
  }
}

const prefijoLord = prefijar("Lord.")
prefijar("Tehelen")

const prefijoLicenciado = prefijar("Lic.")
prefijoLicenciado("Augusto")

// callbacks y promesas
function getUser (cb) {
  setTimeout(function () {
    const users = ["Alvaro", "Simon", "Marinelsa"]
  }, 300); // se demora 300 ms
}

getUser(function (users) {
  console.log(users)
})

getUser(function (err, users) {
  if (err) {
    console.log(err.message);
    return;
  }
  console.log(users)
})

// Problemas de cb encadenados
getUser(function (users) {
  users.forEach(
    function (user) {
      getRole(user, function (roles) {
        saveRoles(user, roles.push("delete"));
      })
    }
  );
})

// Promesas
function getUser() {
  return new Promise(function (fulfill) {
    setTimeout(function () {
      const users = ["Alvaro", "Simon", "Marinelsa"]
      fulfill(users)
    }, 300); // se demora 300 ms
  })
}

getUser()
  .then(function (users) {
    console.log(users);
  })