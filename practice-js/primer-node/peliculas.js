
const lista = ["pan", "pollo", "huevos", "harina", "arroz"];
lista.push("aceite de girasol");
console.log(lista)

lista.pop()
console.log(lista)

const listaPeliculas = [
    { nombre: "El bueno, el malo y el feo", director: "Sergio Leone", fecha: 1966 },
    { nombre: "Rango", director: "Gore Verbinski", fecha: 2011 },
    { nombre: "El señor de los anillos: la comunidad del anillo", director: "Peter Jackson", fecha: 2001},
]

const peliculasModernas = listaPeliculas.filter(f => f.fecha > 2010)
console.log(peliculasModernas)

const directores = listaPeliculas.map(function(element){
    return `${element.director}`;
  })
  console.log(directores)

  const peliculas = listaPeliculas.map(function(element){
    return `${element.nombre}`;
  })
  
  console.log(peliculas)


const directores2 =listaPeliculas.map(pelicula => pelicula.director);
console.log(directores2);

const titulos2 = listaPeliculas.map(pelicula => pelicula.nombre);
console.log(titulos2);

const director_titulo = directores2.concat(titulos2);
console.log(director_titulo);


