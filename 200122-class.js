class padre {
    constructor (apellido){
        this.apellidoPadre = apellido; // apellidoPaterno = propiedad del objeto
        // apellido = parámetro 
    }
}

class hijo extends padre { // La clase hijo HEREDA de la clase padre
    constructor (nombre, apellido){
        super(apellido); // HEREDA apellido del padre
        this.nombreHijo = nombre; // el constructor tiene una propiedad que se llama nombreHijo
    }

    registro(){
        return ("El nombre del hijo será: " + this.nombreHijo + " " + this.apellidoPadre);
    }
}

let Hijo1 = new hijo ("Mario", "Valdes");
let Hijo2 = new hijo ("Fernanda", "Valdes");

document.getElementById("Id").innerHTML = Hijo1.registro();
document.getElementById("Id2").innerHTML = Hijo2.registro();