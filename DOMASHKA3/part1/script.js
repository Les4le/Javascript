const input = document.getElementById("username");
const error = document.getElementById("error");

input.addEventListener("keypress", function (e) {
  if (/\d/.test(e.key)) {
    e.preventDefault();
    showError();
  }
});

input.addEventListener("input", function () {
  if (/\d/.test(this.value)) {
    this.value = this.value.replace(/\d/g, "");
    showError();
  }
});

function showError() {
  error.style.display = "block";
  setTimeout(() => (error.style.display = "none"), 2000);
}
