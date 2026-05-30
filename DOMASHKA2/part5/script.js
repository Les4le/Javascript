const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

document
  .getElementById("generate-btn")
  .addEventListener("click", generateCalendar);

function generateCalendar() {
  const monthIndex = parseInt(document.getElementById("month-input").value) - 1;
  const year = parseInt(document.getElementById("year-input").value);

  if (isNaN(monthIndex) || monthIndex < 0 || monthIndex > 11 || isNaN(year)) {
    alert("Будь ласка, введіть коректні дані!");
    return;
  }

  document.getElementById("calendar-title").textContent =
    `${monthNames[monthIndex]}, ${year}`;

  const firstDay = new Date(year, monthIndex, 1);
  // Количество дней в выбранном месяце
  const totalDays = new Date(year, monthIndex + 1, 0).getDate();

  let startDayOfWeek = firstDay.getDay();
  if (startDayOfWeek === 0)
    startDayOfWeek = 6; // Воскресенье
  else startDayOfWeek--; // Смещаем остальные дни

  const container = document.getElementById("calendar-container");
  container.innerHTML = "";

  const table = document.createElement("table");

  const daysOfWeek = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
  const headerRow = document.createElement("tr");
  daysOfWeek.forEach((day, index) => {
    const th = document.createElement("th");
    th.textContent = day;
    if (index >= 5) th.className = "weekend";
    headerRow.appendChild(th);
  });
  table.appendChild(headerRow);

  let currentDay = 1;

  for (let i = 0; i < 6; i++) {
    const row = document.createElement("tr");
    let hasCells = false;

    for (let j = 0; j < 7; j++) {
      const td = document.createElement("td");

      if ((i === 0 && j < startDayOfWeek) || currentDay > totalDays) {
        td.textContent = "";
      } else {
        td.textContent = currentDay;
        if (j >= 5) td.className = "weekend";
        currentDay++;
        hasCells = true;
      }
      row.appendChild(td);
    }

    if (hasCells) {
      table.appendChild(row);
    }
    if (currentDay > totalDays) break;
  }

  container.appendChild(table);
}

generateCalendar();
