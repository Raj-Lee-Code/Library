
let bookCollection = [];

const modal = document.querySelector("#modal");
const openModal = document.querySelector(".open-button");
const closeModal = document.querySelector(".submitButton");
const bookTitle = document.getElementById("bookTitle").innerText
const bookAuthor = document.getElementById("author").innerText
const bookPages = document.getElementById("pages").innerText



function Book(title, author, pages){
  this.title = title
  this.author = author
  this.pages = pages
};

function addBook(bookTitle, bookAuthor, bookPages){
  const newBook = new Book(bookTitle,bookAuthor,bookPages)
  bookCollection.push(newBook)
}

openModal.addEventListener("click", () => {
  modal.showModal();
});

closeModal.addEventListener("click", () => {
  addBook(bookTitle,bookAuthor,bookPages)
  modal.close();
});


