// 1. Порівняння двох чисел
// function compareNumbers(a, b) {
//     if (a < b) {
//         return -1;
//     } else if (a > b) {
//         return 1;
//     } else {
//         return 0;
//     }
// }

// // 2. Факторіал числа
// function factorial(n) {
//     let result = 1;

//     for (let i = 1; i <= n; i++) {
//         result = result * i;
//     }

//     return result;
// }

// // 3. Об'єднання трьох цифр в одне число
// function combineDigits(a, b, c) {
//     return a * 100 + b * 10 + c;
// }

// // 4. Площа прямокутника або квадрата
// function getArea(length, width = length) {
//     return length * width;
// }

// // 5. Перевірка на досконале число
// function isPerfectNumber(num) {
//     let sum = 0;

//     for (let i = 1; i < num; i++) {
//         if (num % i === 0) {
//             sum = sum + i;
//         }
//     }

//     return sum === num;
// }

// // 6. Пошук досконалих чисел у діапазоні
// function showPerfectNumbers(min, max) {
//     let result = "";

//     for (let i = min; i <= max; i++) {
//         if (isPerfectNumber(i)) {
//             result = result + i + " ";
//         }
//     }

//     return result;
// }

// // 7. Форматування часу
// function formatTime(hours, minutes = 0, seconds = 0) {
//     let mm = String(minutes).padStart(2, "0");
//     let ss = String(seconds).padStart(2, "0");

//     return hours + ":" + mm + ":" + ss;
// }

// // 8. Переведення часу в секунди
// function timeToSeconds(hours, minutes = 0, seconds = 0) {
//     return hours * 3600 + minutes * 60 + seconds;
// }

// // 9. Переведення секунд у формат часу
// function secondsToTime(totalSeconds) {
//     let hours = Math.floor(totalSeconds / 3600);
//     let minutes = Math.floor((totalSeconds % 3600) / 60);
//     let seconds = totalSeconds % 60;

//     return formatTime(hours, minutes, seconds);
// }

// // 10. Різниця між двома датами
// function getTimeDifference(h1, m1, s1, h2, m2, s2) {
//     let time1 = timeToSeconds(h1, m1, s1);
//     let time2 = timeToSeconds(h2, m2, s2);

//     let difference = Math.abs(time1 - time2);

//     return secondsToTime(difference);
// }

// // Приклади використання
// console.log(compareNumbers(5, 10));          // -1
// console.log(factorial(5));                   // 120
// console.log(combineDigits(1, 4, 9));         // 149
// console.log(getArea(5, 10));                 // 50
// console.log(getArea(7));                     // 49
// console.log(isPerfectNumber(28));            // true
// console.log(showPerfectNumbers(1, 1000));    // 6 28 496
// console.log(formatTime(9, 5, 3));            // 9:05:03
// console.log(timeToSeconds(1, 1, 1));         // 3661
// console.log(secondsToTime(3661));            // 1:01:01
// console.log(getTimeDifference(10, 30, 0, 12, 0, 0)); // 1:30:00
