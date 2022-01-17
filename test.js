let myLibrary = [];

function Book(title,author,year, status){ //constructor
    this.title = title;
    this.author = author;
    this.year = year;
    this.status = status;
}

Book.prototype.information = function(){
    return `${this.title} ${this.author} ${this.year}`;
}

function getAttributes(){
    let inputTitle = document.getElementById("title").value;
    let inputAuthor = document.getElementById("author").value;
    let inputYear = document.getElementById("year").value;
    let inputStatus = document.getElementById("read-status-id").value;
    console.log(inputStatus);
    
    let bookObj = new Book(inputTitle,inputAuthor,inputYear,inputStatus);
    myLibrary.push(bookObj); //adds the object into the end of the myLibrary array
    createTable(myLibrary); //creates the table

    //Resets the forms
    document.getElementById("formDetail").reset();
    
}

function displayLibrary(){ //debugging function, not needed
    console.log("library size = "+myLibrary.length);
    for(let x = 0; x < myLibrary.length; x++){
        //console.log("inside");
        console.log(myLibrary[x]);
    }
}

function createTable(tableData) { //reference: https://stackoverflow.com/a/15164958
    var table = document.getElementById('libraryTable');
    var tableBody = document.createElement('tbody');
    deleteTable(); //technically, it just deletes the table every time it creates a new one.
                   //The myLibrary array is untouched, and it is reloaded again.
  
    tableData.forEach(function(rowData) {
      var row = document.createElement('tr');
        for (var prop in rowData) { //reference: https://stackoverflow.com/a/16735184 ,adds every property to the table
            if (Object.prototype.hasOwnProperty.call(rowData, prop)) {
                var property = rowData[`${prop}`];
                var cell = document.createElement('td');
                cell.appendChild(document.createTextNode(property));
                row.appendChild(cell);
            }
        }
        tableBody.appendChild(row);
    });
    table.appendChild(tableBody);
    document.body.appendChild(table);
}

function deleteTable(){ //reference: https://stackoverflow.com/a/19865006
    var myTable = document.getElementById("libraryTable");
    var rowCount = myTable.rows.length;
    for (var x=rowCount-1; x>0; x--) {
       myTable.deleteRow(x);
    }
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