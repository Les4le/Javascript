const lights = [
  document.getElementById("red"),
  document.getElementById("yellow"),
  document.getElementById("green"),
];

const btn = document.getElementById("next-btn");
let currentLightIndex = -1;

btn.addEventListener("click", () => {
  if (currentLightIndex !== -1) {
    lights[currentLightIndex].classList.remove("active");
  }

  currentLightIndex = (currentLightIndex + 1) % lights.length;

  lights[currentLightIndex].classList.add("active");
});
