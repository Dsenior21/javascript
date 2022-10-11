class Estudiante {
    nombre = "Diego"
    asignatura = ["javascript", "HTML", "CSS"];

    obtenDatos(){
        console.log(this.nombre, this.asignatura)
    }

}

const estud = new Estudiante();

console.log(estud.obtenDatos())
