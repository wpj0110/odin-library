let myLibrary = [];
var btnCount = 0; //button count, incremented as needed. Used as the id for newly created buttons.

function Book(title, author, year, status){ //constructor
    this.title = title;
    this.author = author;
    this.year = year;
    this.status = status;
    this.btnCount = btnCount; //btnCount is global anyway
}

Book.prototype.information = function(){
    return `${this.title} ${this.author} ${this.year}`;
}

function getAttributes(){ //gets the attributes of all the forms
    let inputTitle = document.getElementById("title").value;
    let inputAuthor = document.getElementById("author").value;
    let inputYear = document.getElementById("year").value;
    let inputStatus = document.getElementById("read-status-id").value;
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
                var cell = document.createElement('td');
                var property = rowData[`${prop}`];
                if (property === "Unread" || property === "Read"){
                    console.log("Read/Unread Part")
                    var readButton = document.createElement("button"); //https://www.w3schools.com/jsref/met_document_createelement.asp
                    readButton.innerText = `${property}`
                    readButton.id = `${btnCount++}`;
                    readButton.className = "read-button";
                    readButton.setAttribute("onclick",`readStatus(${readButton.id})`);
                    cell.appendChild(readButton)
                } else{
                    cell.appendChild(document.createTextNode(property));
                }
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

function readStatus(btnId){ //changes the read status of the book object from read -> unread or unread -> read 
    document.getElementById(`${btnId}`).addEventListener('click', function (e) {
        //console.log(e);
        //e.target.style.background = 'blue';
        for(let i = 0; i < myLibrary.length; i++){
            if(btnId == myLibrary[i].btnCount){
                if (myLibrary[i].status === "Unread"){
                    myLibrary[i].status = "Read";
                } else{
                    myLibrary[i].status = "Unread";
                }
                break;
            }
        }
        e.target.innerText = myLibrary[i].status;
    });
    console.log("My Library is: "+myLibrary);
    createTable(myLibrary);
    return;
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