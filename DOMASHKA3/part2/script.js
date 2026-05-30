const openBtn = document.getElementById("open-modal");
const closeBtn = document.getElementById("close-modal");
const overlay = document.getElementById("modal-overlay");

// Открытие окна
openBtn.addEventListener("click", () => {
  overlay.classList.add("show");
});

// Закрытие окна по кнопке
closeBtn.addEventListener("click", () => {
  overlay.classList.remove("show");
});

// Закрытие окна по клику на область вокруг него
overlay.addEventListener("click", (e) => {
  if (e.target === overlay) {
    overlay.classList.remove("show");
  }
});
