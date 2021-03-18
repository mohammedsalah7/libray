let myLibrary = [];
class Book {
  constructor(tittle, author, imgs) {
    (this.tittle = tittle),
      (this.author = author),
      (this.imgs = imgs)
    
  }
}

function addBookToLibrary() {
  let tittle = document.getElementById("tittleInput").value;
  let author = document.getElementById("authorInput").value;
  let imgs = document.getElementById("imgsInput").value;

  let newBook = new Book(tittle, author, imgs);
  myLibrary.unshift(newBook);
  let container = document.querySelector("#container");

  clearLibrary(container);
  displayLibrary();

  removeForm();

  //clear form inputs
  let inputs = document.querySelectorAll("input");
  inputs.forEach((input) => (input.value = ""));
}

function displayLibrary() {

  for (let i = 0; i < myLibrary.length; i++) {
    let container = document.querySelector("#container");
    let displayBook = document.createElement("div");
    displayBook.classList.add("displayBook");
    container.appendChild(displayBook);

    let bookTittle = document.createElement("div");
    bookTittle.classList.add("bookTittle");
    bookTittle.textContent = `  Tittle: ${myLibrary[i]["tittle"]}`;
    displayBook.appendChild(bookTittle);

    let bookAuthor = document.createElement("div");
    bookAuthor.classList.add("bookAuthor");
    bookAuthor.textContent = `Author: ${myLibrary[i]["author"]}`;
    displayBook.appendChild(bookAuthor);

    let bookImgs = document.createElement("img");
    bookImgs.src =  `${myLibrary[i]["imgs"]}`;
    bookImgs.setAttribute("class", "imgs")
    displayBook.appendChild(bookImgs);

  }
}

    let newBookButton = document.querySelector("#newBookButton");
    newBookButton.addEventListener("click",displayForm );

    let addBtn = document.querySelector("#addBtn");
    addBtn.addEventListener("click",addBookToLibrary );

function clearLibrary(container) {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}

function displayForm() {
  let formArea = document.querySelector("#form");
  let newBookButton = document.querySelector("#newBookButtonArea");
  newBookButton.style = "display: block";
  formArea.style = "display: block;";
}

function removeForm() {
  let formArea = document.querySelector("#form");
  let newBookButton = document.querySelector("#newBookButtonArea");
  newBookButton.style = "display: block";
  formArea.style = "display: none;";
}


//adding some sample books
let book1 = new Book("Eloquent JavaScript", "Marijn Haverbeke" , "https://eloquentjavascript.net/img/cover.jpg");
myLibrary.push(book1);
let book2 = new Book("React", "Adam and Roy","https://itbook.download/img/2/3/2372149ccc3c9af1ed2146d4f0686ad8.webp");
myLibrary.push(book2);
let book3 = new Book("Laravel", "Max Beerbohm ", "https://images-na.ssl-images-amazon.com/images/I/41QnypLKb1L._SX331_BO1,204,203,200_.jpg");
myLibrary.push(book3);
let book4 = new Book("Pro CSS Techniques", " Rubin and Dan" , "https://images.springer.com/sgw/books/medium/9781590597323.jpg");
myLibrary.push(book4);
let book5 = new Book("Clean Code", "Robert C. Martin" , "https://images-na.ssl-images-amazon.com/images/I/41-%2Bg1a2Y1L._AC_UL600_SR453,600_.jpg");
myLibrary.push(book5);
let book6 = new Book("C Programming", "Darrel L. Graham" , "https://images-eu.ssl-images-amazon.com/images/I/51HTieS6nkL._SX342_SY445_QL70_ML2_.jpg");
myLibrary.push(book6);
let book7 = new Book("Bootstrap4", "Jen Kramer" , "https://www.ostraining.com/cdn/images/books-club/bootstrap4.jpg");
myLibrary.push(book7);
let book8 = new Book(" Learn Python ", "Zed Shaw" , "https://images-na.ssl-images-amazon.com/images/I/51ko6ehpzEL.jpg");
myLibrary.push(book8);
let book9 = new Book("Beginning Node.js", "Basarat Syed" , "https://images-na.ssl-images-amazon.com/images/I/51pGfFio7cL._SX258_BO1,204,203,200_.jpg");
myLibrary.push(book9);
let book10 = new Book("PHP", "Steven Holzner" , "https://images-na.ssl-images-amazon.com/images/I/51vrHzkpt+L._SX382_BO1,204,203,200_.jpg");
myLibrary.push(book10);

displayLibrary()