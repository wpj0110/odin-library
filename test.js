let myLibrary = [];

function getAttributes(){
    let inputTitle = document.getElementById("title").value;
    let inputAuthor = document.getElementById("author").value;
    let inputYear = document.getElementById("year").value;
    
    let bookObj = new Book(inputTitle,inputAuthor,inputYear);
    myLibrary.push(bookObj); //adds the object into the end of the myLibrary array
    createTable(myLibrary);
    
}

function Book(title,author,year){
    this.title = title;
    this.author = author;
    this.year = year;
}

Book.prototype.information = function(){
    return `${this.title} ${this.author} ${this.year}`;
}

function displayLibrary(){
    console.log("library size = "+myLibrary.length);
    for(let x = 0; x < myLibrary.length; x++){
        //console.log("inside");
        console.log(myLibrary[x]);
    }
}

function createTable(tableData) { //reference: https://stackoverflow.com/a/15164958
    var table = document.getElementById('libraryTable');
    var tableBody = document.createElement('tbody');
  
    tableData.forEach(function(rowData) {
      var row = document.createElement('tr');
        for (var prop in rowData) { //reference: https://stackoverflow.com/a/16735184
            if (Object.prototype.hasOwnProperty.call(rowData, prop)) {
                var property = rowData[`${prop}`];
                var cell = document.createElement('td');
                cell.appendChild(document.createTextNode(property));
                row.appendChild(cell);
            }
        }
        tableBody.appendChild(row); //important, do not delete this
    });
    table.appendChild(tableBody);
    document.body.appendChild(table);
  }



/////////FOR DEBUGGING////////////
///Testing if it works properly
//const book1 = new Book("hobbit","author1","year1");
//const book2 = new Book("lord of the rings","author2","year2");

//addBookToLibrary(book1);
//addBookToLibrary(book2);

//displayLibrary();
///////////DEBUGGING ^^^^^^^^ DEBUGGING///////////////









////Section below is irrelevant///////
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