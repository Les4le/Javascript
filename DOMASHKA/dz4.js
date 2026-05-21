// отвечу сразу на вопрос почему не гитхаб ссылкой
// щас у меня не очень удобное время следить за всем сразу, очень ограниченный час на то что бы сделать домашки в шаге
// в то же время не хочу что бы моей маме в 3 раз звонили с вопросом "почему ваш сын не здает домашки"
// я очень хочу учится в шаге, но на данный момент меня очень давит НМТ, и приезд мамы с другой страны сюда,
// я каждый день готовлюсь к этому убираю в доме и так далее, и как и всем, мне очень хочется иметь свободное время,
// сейчас я нашел время сделать шаг, но меня уже торопит одно дело которое надо сделать, поэтому я не сдаю дз ссылками гитхаб
// у меня попросту не остается времени.

// Завдання 1

// class Marker {
//     constructor(color, ink = 100) {
//         this.color = color;
//         this.ink = ink;
//     }

//     print(text) {
//         let result = "";

//         for (let char of text) {
//             if (this.ink <= 0) {
//                 break;
//             }

//             result += char;

//             if (char !== " ") {
//                 this.ink -= 0.5;
//             }
//         }

//         document.write(
//             `<p style="color:${this.color};">${result}</p>`
//         );
//     }
// }

// class RefillableMarker extends Marker {
//     refill(amount) {
//         this.ink += amount;

//         if (this.ink > 100) {
//             this.ink = 100;
//         }
//     }
// }

// // Завдання 2

// class ExtendedDate extends Date {
//
//     getTextDate() {
//         const months = [
//             "січня", "лютого", "березня", "квітня",
//             "травня", "червня", "липня", "серпня",
//             "вересня", "жовтня", "листопада", "грудня"
//         ];

//         return this.getDate() + " " + months[this.getMonth()];
//     }

//     isFutureOrToday() {
//         const today = new Date();

//         today.setHours(0, 0, 0, 0);

//         const currentDate = new Date(this);

//         currentDate.setHours(0, 0, 0, 0);

//         return currentDate >= today;
//     }

//     isLeapYear() {
//         const year = this.getFullYear();

//         return (
//             (year % 4 === 0 && year % 100 !== 0) ||
//             year % 400 === 0
//         );
//     }

//     getNextDate() {
//         const nextDate = new ExtendedDate(this);

//         nextDate.setDate(this.getDate() + 1);

//         return nextDate;
//     }
// }

// // Завдання 3

// class Employee {
//     constructor(name, position, salary) {
//         this.name = name;
//         this.position = position;
//         this.salary = salary;
//     }
// }

// const employees = [
//     new Employee("Іван Петренко", "Менеджер", 25000),
//     new Employee("Олена Сидоренко", "Бухгалтер", 30000),
//     new Employee("Андрій Коваленко", "Касир", 22000)
// ];

// class EmpTable {
//     constructor(employees) {
//         this.employees = employees;
//     }

//     getHtml() {
//         let html = `
//             <table class="emp-table">
//                 <tr>
//                     <th>Ім'я</th>
//                     <th>Посада</th>
//                     <th>Зарплата</th>
//                 </tr>
//         `;

//         for (let emp of this.employees) {
//             html += `
//                 <tr>
//                     <td>${emp.name}</td>
//                     <td>${emp.position}</td>
//                     <td>${emp.salary}</td>
//                 </tr>
//             `;
//         }

//         html += `</table>`;

//         return html;
//     }
// }

// // Завдання 4

// class StyledEmpTable extends EmpTable {
//     getStyles() {
//         return `
//             <style>
//                 .emp-table {
//                     border-collapse: collapse;
//                     width: 100%;
//                 }

//                 .emp-table th,
//                 .emp-table td {
//                     border: 1px solid #000;
//                     padding: 8px;
//                     text-align: left;
//                 }

//                 .emp-table th {
//                     background-color: #f2f2f2;
//                 }
//             </style>
//         `;
//     }

//     getHtml() {
//         return this.getStyles() + super.getHtml();
//     }
// }

// // Завдання 1
// const marker = new Marker("blue", 10);
// marker.print("Hello World! Це текст маркером.");

// const refillableMarker = new RefillableMarker("red", 5);
// refillableMarker.print("Короткий текст.");
// refillableMarker.refill(50);
// refillableMarker.print(" Маркер заправлено!");

// // Завдання 2
// const date = new ExtendedDate(2026, 4, 18); // 18 травня 2026

// console.log(date.getTextDate());
// console.log(date.isFutureOrToday());
// console.log(date.isLeapYear());
// console.log(date.getNextDate().getTextDate());

// // Завдання 3 і 4
// const table = new StyledEmpTable(employees);
// document.write(table.getHtml());
