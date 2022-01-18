let myLibrary = [];
var cardId = 0; //button count, incremented as needed. Used as the id for newly created buttons.

function Book(title, author, pages, status){ //constructor
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
    this.cardId = cardId; //btnCount is global anyway
}

Book.prototype.information = function(){
    return `${this.title} ${this.author} ${this.pages}`;
}

function getAttributes(){ //gets the attributes of all the forms
    let inputTitle = document.getElementById("title").value;
    let inputAuthor = document.getElementById("author").value;
    let inputPages = document.getElementById("pages").value;
    let inputStatus = document.getElementById("read-status-id").value;
    let bookObj = new Book(inputTitle,inputAuthor,inputPages,inputStatus,cardId);
    myLibrary.push(bookObj); //adds the object into the end of the myLibrary array
    createCards(bookObj);
    cardId = cardId + 1;
    
    //createTable(myLibrary); //creates the table

    //Resets the forms
    document.getElementById("formDetail").reset();
    
}

function displayLibrary(){ //displays the library contents... for debugging.
    console.log("library size = "+myLibrary.length);
    for(let x = 0; x < myLibrary.length; x++){
        //console.log("inside");
        console.log(myLibrary[x]);
    }
}

function createCards(obj){
    const container = document.querySelector('#container');
    console.log("creating card...")
    const div = document.createElement('div');
    div.setAttribute('id', `${obj.cardId}`); 
    div.textContent = `${obj.title} ${obj.author} ${obj.pages} `;

    const statusButton = document.createElement('button');
    statusButton.setAttribute('id',`status${obj.cardId}`);
    statusButton.setAttribute('onclick',`readStatus(${obj.cardId})`);
    statusButton.textContent = `${obj.status}`;
    console.log("Attributes of statusButton: "+statusButton.getAttribute('id'));
    
    const deleteButton = document.createElement('button');
    deleteButton.setAttribute('id',`del${obj.cardId}`);
    deleteButton.setAttribute('onclick',`deleteCard(${obj.cardId})`);
    deleteButton.textContent = "Delete This";
    
    container.appendChild(div);
    div.appendChild(statusButton);
    div.appendChild(deleteButton);
}

function readStatus(cardId){ //changes the read status of the book
    for (let x = 0; x < myLibrary.length; x++){
        if (myLibrary[x].cardId == cardId){
            if(myLibrary[x].status == "Unread"){
                myLibrary[x].status = "Read";
            }  else {
                myLibrary[x].status = "Unread";
            }
            const statusButton = document.getElementById(`status${myLibrary[x].cardId}`);
            statusButton.textContent = myLibrary[x].status;
            displayLibrary();
            break;
        }
    }
    
}

function deleteCard(cardId){
    //const container = document.querySelector('#container');
    for (let x = 0; x < myLibrary.length; x++){
        if (myLibrary[x].cardId == cardId){
            myLibrary.splice(x, 1); //removes the bookObject in the array
            //displayLibrary();

            var card = document.getElementById(`${cardId}`);
            card.remove();
            break;
        }
    }
}


/*

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
*/