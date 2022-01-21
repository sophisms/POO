class Book {
    constructor(title, genre, author, read, read_date){
        this.title = title;
        this.genre = genre;
        this.author = author;
        this.read = read;
        this.read_date = read_date;
    }
    Print(){ return "El libro es: " + this.title + " de " + this.author + " del género " + this.genre + ". El estado de lectura es " + this.read + " y  la fecha de lectura es " + this.read_date;
    }
}



class BookList { //CHECAR
    numRead;
    numNotRead;
    allBooks = [];

    constructor(nextBook, currentBook, lastBook){
        this.nextBook = nextBook;
        this.currentBook = currentBook;
        this.lastBook = lastBook;

        this.add(this.nextBook);
        this.add(this.currentBook);
        this.add(this.lastBook);
    }

    readBooks() {
        let aux = 0;
        this.allBooks.forEach(libro => {
            if(libro.read == true)
            aux++;
        })
        this.numRead = aux;
        return this.numRead;
    }

    notReadBooks() {
        let aux = 0;
        this.allBooks.forEach(libro => {
            if(libro.read == false)
            aux++;
        })
        this.numNotRead = aux;
        return this.numNotRead;
    }

    add(book){
        this.allBooks.push(book);
        //localStorage.setItem(this.allBooks);
    }

    addNextBook(nextBook) {
        this.allBooks.unshift(nextBook);
    }

    finishCurrentBook() {
        this.currentBook.read = true;
        this.currentBook.read_date = new Date(Date.now());
        this.lastBook = this.currentBook;
        this.currentBook = this.nextBook;

        this.allBooks.forEach(libro => {
            if(libro.read == false)
            this.nextBook = libro;
        })
    }
}

let Book1 = new Book("My Little Harry Prince Potter", "Fantasy", "Otto", false, "");
//localStorage.setItem("book1", Book1);
let Book2 = new Book("Star Hunger Game Wars", "Fantasy Sci-fi", "Otto", true, new Date(Date.now()));
let Book3 = new Book("Las aventuras de Fulanito", "Fantasy Sci-fi", "Otto", false, "");
let Book4 = new Book("Las aventuras de Otto", "Realismo Místico", "Otto", false, "");

let BookList1 = new BookList(Book3, Book1, Book2);



document.getElementById("Book1").innerHTML = Book1.Print();
document.getElementById("Book2").innerHTML = Book2.Print();
//document.getElementById("Book3").innerHTML = Book3.Print();

console.log("Libro actual: " + BookList1.currentBook.title);
console.log("Siguiente libro: " + BookList1.nextBook.title);
console.log("Último libro que leí: " + BookList1.lastBook.title);

BookList1.add(Book4);
console.log("Lista de todos los libros: ")
console.log(BookList1.allBooks);
BookList1.finishCurrentBook();

console.log("Libro actual: " + BookList1.currentBook.title);
console.log("Siguiente libro: " + BookList1.nextBook.title);
console.log("Último libro que leí: " + BookList1.lastBook.title);
console.log(BookList1.readBooks());
console.log(BookList1.notReadBooks());


/*
function modificar(){
            localStorage.setItem("nombre", "David")
            localStorage.setItem("apellido", "Gordillo")
        }
*/
// console.log(Book1);
// let algo = localStorage.getItem("book1");
// console.log(algo.title);

document.getElementById("numRead").innerHTML = BookList1.readBooks();
document.getElementById("nextBook").innerHTML = BookList1.nextBook.title;

