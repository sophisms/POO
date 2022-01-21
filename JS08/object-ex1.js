/*Part 1 Javascript

Create a class called Person which accepts the name of a person as a string, and his/her/their age as a number.

The Person class should have a method called Describe which returns a string with the following syntax: "name, age years old".

For example, if Manny is 19 years old the function Describe of his object will return "Manny, 19 years old". */

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    Describe() {
        return (this.name + ", " + this.age + " years old");
    }
}

let myData = new Person("Sofia", 23);
console.log(myData.Describe());

/*Part 2 HTML

Create an HTML page that has 2 input boxes: one for name and another for age. When someone enters a name and age, the page will show a list of "{Name}, {x} years old". */

var nombre = prompt("Ingresa tu nombre: ");
var edad = prompt("Ingresa tu edad: ");

let ourData = new Person(nombre,edad);

document.getElementById("person").innerHTML = ourData.Describe(); 


