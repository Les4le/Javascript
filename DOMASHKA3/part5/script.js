const bookList = document.getElementById("book-list");

bookList.addEventListener("click", function (e) {
  const clickedBook = e.target.closest(".book-item");

  if (!clickedBook) return;

  const previouslySelected = bookList.querySelector(".book-item.selected");

  if (previouslySelected === clickedBook) {
    clickedBook.classList.remove("selected");
  } else {
    if (previouslySelected) {
      previouslySelected.classList.remove("selected");
    }

    clickedBook.classList.add("selected");
  }
});
