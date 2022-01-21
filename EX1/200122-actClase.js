var apellido = prompt("Ingresa el apellido del padre: ");
var nombre1 = prompt("Ingresa el nombre del primer hijo: ");
var nombre2 = prompt("Ingresa el nombre del segundo hijo: ");

class padre {
    constructor(apellido) {
        this.apellidoPadre = apellido;
    }
}

class hijo extends padre {
    constructor(nombre, apellido) {
        super(apellido);
        this.nombreHijo = nombre;
    }

    registro() {
        return (
            "El nombre del hijo será: " + this.nombreHijo + " " + this.apellidoPadre
        );
    }
}

let Hijo1 = new hijo(nombre1, apellido);
let Hijo2 = new hijo(nombre2, apellido);

document.getElementById("Id1").innerHTML = Hijo1.registro();
document.getElementById("Id2").innerHTML = Hijo2.registro();
