
let bookCollection = [];

const modal = document.querySelector("#modal");
const openModal = document.querySelector(".open-button");
const closeModal = document.querySelector(".submitButton");

function Book(title, author, pages){
  this.title = title
  this.author = author
  this.pages = pages
};

function addBook(bookTitle, bookAuthor, bookPages){
  div = document.createElement('div');
div.id = 'container';
div.innerHTML = 'Hi there!';
div.className = 'border pad';
document.body.appendChild(div);
  const newBook = new Book(bookTitle,bookAuthor,bookPages)
  bookCollection.push(newBook)
}

openModal.addEventListener("click", () => {
  modal.showModal();
});

closeModal.addEventListener("click", () => {


const bookTitle = document.getElementById("bookTitle").textContent
console.log(bookTitle)
const bookAuthor = document.getElementById("author").innerText
const bookPages = document.getElementById("pages").innerText
addBook(bookTitle,bookAuthor,bookPages)
console.log(bookCollection)
modal.close();
});


