const track = document.getElementById("track");
const thumb = document.getElementById("thumb");
const valueDisplay = document.getElementById("value");

let isDragging = false;

thumb.addEventListener("mousedown", (e) => {
  isDragging = true;
  e.preventDefault();
});

document.addEventListener("mousemove", (e) => {
  if (!isDragging) return;

  const trackRect = track.getBoundingClientRect();
  let newLeft = e.clientX - trackRect.left - thumb.offsetWidth / 2;

  const maxLeft = trackRect.width - thumb.offsetWidth;
  if (newLeft < 0) newLeft = 0;
  if (newLeft > maxLeft) newLeft = maxLeft;

  thumb.style.left = newLeft + "px";

  const percent = Math.round((newLeft / maxLeft) * 100);
  valueDisplay.textContent = percent;
});

document.addEventListener("mouseup", () => {
  isDragging = false;
});

track.addEventListener("click", (e) => {
  if (e.target === thumb) return;
  const trackRect = track.getBoundingClientRect();
  let newLeft = e.clientX - trackRect.left - thumb.offsetWidth / 2;
  const maxLeft = trackRect.width - thumb.offsetWidth;

  if (newLeft < 0) newLeft = 0;
  if (newLeft > maxLeft) newLeft = maxLeft;

  thumb.style.left = newLeft + "px";
  const percent = Math.round((newLeft / maxLeft) * 100);
  valueDisplay.textContent = percent;
});
