function getAttributes(){
    let inputName = document.getElementById("input1").value;
    let inputAuthor = document.getElementById("input2").value;
    let inputDate = document.getElementById("input3").value;
    
    let bookObj = new Book(inputName,inputAuthor,inputDate);
    addBookToLibrary(bookObj);
    
}

let myLibrary = [];

function Book(title,author,date){
    this.title = title;
    this.author = author;
    this.date = date;
}

Book.prototype.information = function(){
    return `${this.title} ${this.author} ${this.date}`;
}

function addBookToLibrary(bookObj) {
    console.log("adding book "+myLibrary.length);
    //myLibrary[myLibrary.length-1] = bookObj;
    myLibrary.push(bookObj);
    console.log(myLibrary.length);
}

function displayLibrary(){
    console.log("library size = "+myLibrary.length);
    for(let x = 0; x < myLibrary.length; x++){
        //console.log("inside");
        console.log(myLibrary[x]);
    }
}
///Testing if it works properly
//const book1 = new Book("title1","author1","date1");
//const book2 = new Book("title2","author2","date2");

//addBookToLibrary(book1);
//addBookToLibrary(book2);

//displayLibrary();

function temp(){
    const container = document.querySelector('#container');

    const content = document.createElement('div');
    content.classList.add('content');
    content.textContent = 'This is the glorious text-content!';

    container.appendChild(content);
}

const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
  alert("Hello World");
});

btn.addEventListener('click', function (e) {
    //console.log(e);
    e.target.style.background = 'blue';
  });