let myLibrary = [];
var cardId = 0; //button count, incremented as needed. Used as the id for newly created buttons.

function Book(title, author, pages, status){ //constructor
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
    this.cardId = cardId; //cardId is global anyway
}

Book.prototype.information = function(){
    return `${this.title} ${this.author} ${this.pages}`;
}

function getAttributes(){ //gets the attributes of all the forms
    let inputTitle = document.getElementById("title").value;
    let inputAuthor = document.getElementById("author").value;
    let inputPages = document.getElementById("pages").value;
    let inputStatus = document.getElementById("read-status-id").value;
    //checks if there are no inputs in the forms...
    if (inputTitle.length === 0 || inputAuthor.length === 0 || inputPages.length === 0 || inputStatus.length === 0){
        alert("Missing Fields. Please Complete the Form");
        return;
    }
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

    const card = document.createElement('div'); //creating the card
    card.setAttribute('id', `${obj.cardId}`); 
    card.setAttribute('class','card-item');

    const detailDiv = document.createElement('div'); //creating an item within the card
    detailDiv.textContent = `${obj.title} By ${obj.author}, ${obj.pages} Pages`;

    const buttonsDiv = document.createElement('div'); //the div that will contain the buttons.
    buttonsDiv.setAttribute('class','card-buttons');

    const statusButton = document.createElement('button');
    statusButton.setAttribute('id',`status${obj.cardId}`);
    statusButton.setAttribute('onclick',`readStatus(${obj.cardId})`);
    statusButton.textContent = `${obj.status}`;
    console.log("Attributes of statusButton: "+statusButton.getAttribute('id'));
    
    const deleteButton = document.createElement('button');
    deleteButton.setAttribute('id',`del${obj.cardId}`);
    deleteButton.setAttribute('onclick',`deleteCard(${obj.cardId})`);
    deleteButton.textContent = "Remove";
    
    container.appendChild(card); //appends the card to the original container
    card.appendChild(detailDiv); //appends an item into the corresponding container
    buttonsDiv.appendChild(statusButton); //
    buttonsDiv.appendChild(deleteButton); //
    card.appendChild(buttonsDiv);
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
            //displayLibrary();
            break;
        }
    }
}

function deleteCard(cardId){ //deletes the card
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