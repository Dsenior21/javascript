const fechaHoy = new Date();
console.log(fechaHoy);

const miFecha= new Date(1998, 01, 18, 1, 12, 0);
console.log(miFecha);

const compa = fechaHoy > miFecha;
console.log(compa);

const diaNacimiento = miFecha.getDate();
console.log(diaNacimiento);

const mesNacimiento = miFecha.getMonth();
console.log(mesNacimiento + 1);

const year = miFecha.getFullYear();
console.log(year);