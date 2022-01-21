const arreglo = ["Guillermo", "Chang", 34];
console.log(arreglo);

let objeto = {
    nombre: "Guillermo",
    apellido: "Chang",
    edad: 34,
    nombreCompleto: function(){
        return this.nombre + " " + this.apellido;
    }
}

console.log(objeto.nombreCompleto());

document.getElementById("boquita").innerHTML = objeto.nombreCompleto();