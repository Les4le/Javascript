const images = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAxt_0PJ8T-KXXZa6YvyLG9iwdnCjpy-VfAQ&s",
  "https://static.vecteezy.com/system/resources/thumbnails/057/068/323/small/single-fresh-red-strawberry-on-table-green-background-food-fruit-sweet-macro-juicy-plant-image-photo.jpg",
  "https://object.pixocial.com/pixocial/dmxffni837f1xrj8pki9xgrl.jpg",
  "https://img.magnific.com/free-photo/closeup-shot-beautiful-butterfly-with-interesting-textures-orange-petaled-flower_181624-7640.jpg?semt=ais_hybrid&w=740&q=80",
];

let currentIndex = 0;

const imgElement = document.getElementById("gallery-img");
const btnBack = document.getElementById("btn-back");
const btnNext = document.getElementById("btn-next");

function updateGallery() {
  imgElement.src = images[currentIndex];

  btnBack.disabled = currentIndex === 0;
  btnNext.disabled = currentIndex === images.length - 1;
}

btnBack.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateGallery();
  }
});

btnNext.addEventListener("click", () => {
  if (currentIndex < images.length - 1) {
    currentIndex++;
    updateGallery();
  }
});

updateGallery();
