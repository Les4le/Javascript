const field = document.getElementById("field");
const ball = document.getElementById("ball");

field.addEventListener("click", (e) => {
  // Размеры поля
  const fieldWidth = field.clientWidth;
  const fieldHeight = field.clientHeight;

  // Размеры мяча
  const ballSize = 100;

  // Координаты клика мыши
  let targetX = e.clientX;
  let targetY = e.clientY;

  // Вычисляем позицию для левого верхнего угла мяча, чтобы его центр стал на место клика
  let leftPos = targetX - ballSize / 2;
  let topPos = targetY - ballSize / 2;

  // Защита от вылета за левую и верхнюю границы
  if (leftPos < 0) leftPos = 0;
  if (topPos < 0) topPos = 0;

  // Защита от вылета за правую и нижнюю границы
  if (leftPos + ballSize > fieldWidth) leftPos = fieldWidth - ballSize;
  if (topPos + ballSize > fieldHeight) topPos = fieldHeight - ballSize;

  // Применяем координаты
  ball.style.left = leftPos + "px";
  ball.style.top = topPos + "px";
});
