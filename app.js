console.log("Hello World!\n==========\n");

// PROJECT Section
console.log("PROJECT:\n==========\n");
const books = [
    {
        title: "Name of the Wind",
        author: "Patrick Rothfuss",
        isRead: true,
    },
];
 
class Book{
    constructor(id, title, author, isRead) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.isRead = isRead;
    }
}

class Library{
    constructor(books){
        this.bookCount = books.length;
        this.books = books;
    }
    markedRead = (checkbox, id) => {
        this.books.forEach(book =>  {
            if (id === book.id){
                book.isRead = true;
                checkbox.checked = true;
                checkbox.disabled = true;
            }
        });
    }
    addBook = () => {  
        const title = document.getElementById("title");  
        const author = document.getElementById("author");  
        const read = document.getElementById("read");  
        const newBook = new Book(this.bookCount, title.value, author.value, read.checked);
        this.books.push(newBook);
        console.log(newBook);
        this.bookCount++;
        let newTr = document.createElement("tr");
        let td1 = document.createElement("td");
        td1.textContent = newBook.title;
        let td2 = document.createElement("td");
        td2.textContent = newBook.author;
        let td3 = document.createElement("td");
        let checkbox = document.createElement("input");
        checkbox.setAttribute("type", "checkbox");
        checkbox.checked = newBook.isRead;
        checkbox.disabled = true;
        td3.append(checkbox);
        newTr.append(td1, td2, td3);
        let newTbody = document.getElementById("tBody");
        newTbody.appendChild(newTr);        
    }
    remBook = () => {
        
    }
}

let library = new Library(books);
const form = document.getElementById("form");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    library.addBook();
});



