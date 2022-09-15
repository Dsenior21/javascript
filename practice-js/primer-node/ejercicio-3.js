
let myName = "Diego";
let myLastname = " Senior";
let estudiante = myName.concat(myLastname);

console.log(estudiante)

let estudianteMayus = estudiante.toUpperCase();
console.log(estudianteMayus)

let estudianteMinus = estudiante.toLowerCase();
console.log(estudianteMinus)

let numStrEstudiantes = estudiante.length
console.log(numStrEstudiantes)

let primerLetraNombre = myName.charAt(0);
console.log(primerLetraNombre)

let primerLetraApellido = myLastname.charAt(0);
console.log(primerLetraApellido);

let sinEspacios = estudiante.replace(/\s+/g, '');
console.log(sinEspacios)

let bool = estudiante.includes(myName);

console.log(bool)

