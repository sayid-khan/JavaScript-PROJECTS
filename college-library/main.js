//constructor
function Book(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;
}
//display constructor
function Display() {

}


// add methods to display prototype
Display.prototype.add = function (book) {
    tablebody = document.getElementById('tablebody')
    let uistring = `
    <tr>
    
                        <td>${book.name}</td>
                        <td>${book.author}</td>
                        <td>${book.type}</td>
                    </tr>`
    tablebody.innerHTML += uistring


}

//implementing the clear
Display.prototype.clear = function () {
    let libraryForm = document.getElementById('libraryForm');
    libraryForm.reset()

}

// implementing the validate
Display.prototype.validate = function (book) {
    if(book.name.length<2 || book.author.length<2){
        return false
    }
    else{
        return true
    }

}

Display.prototype.show = function(type,displaymessage){
    let message = document.getElementById('message')
    message.innerHTML =`
    <div class="alert alert-${type} alert-dismissible fade show" role="alert">
                                <strong>Messge:</strong> ${displaymessage}
                                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">×</span>
                                </button>
                            </div>
    `
    setTimeout(() => {
        message.innerHTML=""
    }, 3000);

}



//add submit event listners to libraryform
let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit', libraryFormSubmit);


function libraryFormSubmit(e) {
    console.log('i have submitted the form');
    let name = document.getElementById('bookname').value
    let author = document.getElementById('author').value
    let type
    let fiction = document.getElementById('fiction')
    let programming = document.getElementById('programming')
    let sports = document.getElementById('sports')

    if (fiction.checked) {
        type = fiction.value
    }
    else if (programming.checked) {
        type = programming.value
    }
    else if (sports.checked) {
        type = sports.value
    }


    let book = new Book(name, author, type)
    console.log(book)


    let display = new Display()
    if(display.validate(book)){
        display.add(book)
        display.clear()
        display.show('success','Your book has been added.')
    }
    else{
        //show error
        display.show('danger','Sorry you cannot add this book.')

    }
    

    e.preventDefault();


}
