const miFuncion = val => {
    if (typeof val === "number"){
    return 2 * val
    }
    throw new Error("le valor debe ser de tipo número");
}


try {
console.log("correcto")
const doble = miFuncion("epa")
console.log(doble)
} catch(e) {
console.log("ERROR")
}finally {
    console.log("esto siempre se ejecuta")
}