// // Завдання 1.

// const car = {
//   manufacturer: "Toyota",
//   model: "Camry",
//   year: 2020,
//   averageSpeed: 90,
// };

// function showCarInfo(car) {
//   console.log("Виробник: " + car.manufacturer);
//   console.log("Модель: " + car.model);
//   console.log("Рік випуску: " + car.year);
//   console.log("Середня швидкість: " + car.averageSpeed + " км/год");
// }

// function calculateTravelTime(car, distance) {
//   let drivingTime = distance / car.averageSpeed;
//   let breaks = Math.floor(drivingTime / 4);
//   let totalTime = drivingTime + breaks;

//   return totalTime;
// }

// // Завдання 2

// const fraction1 = {
//   numerator: 1,
//   denominator: 2,
// };

// const fraction2 = {
//   numerator: 3,
//   denominator: 4,
// };

// function getGCD(a, b) {
//   while (b !== 0) {
//     let temp = b;
//     b = a % b;
//     a = temp;
//   }

//   return a;
// }

// function reduceFraction(fraction) {
//   let gcd = getGCD(fraction.numerator, fraction.denominator);

//   return {
//     numerator: fraction.numerator / gcd,
//     denominator: fraction.denominator / gcd,
//   };
// }

// function addFractions(f1, f2) {
//   let result = {
//     numerator: f1.numerator * f2.denominator + f2.numerator * f1.denominator,
//     denominator: f1.denominator * f2.denominator,
//   };

//   return reduceFraction(result);
// }

// function subtractFractions(f1, f2) {
//   let result = {
//     numerator: f1.numerator * f2.denominator - f2.numerator * f1.denominator,
//     denominator: f1.denominator * f2.denominator,
//   };

//   return reduceFraction(result);
// }

// function multiplyFractions(f1, f2) {
//   let result = {
//     numerator: f1.numerator * f2.numerator,
//     denominator: f1.denominator * f2.denominator,
//   };

//   return reduceFraction(result);
// }

// function divideFractions(f1, f2) {
//   let result = {
//     numerator: f1.numerator * f2.denominator,
//     denominator: f1.denominator * f2.numerator,
//   };

//   return reduceFraction(result);
// }

// // Завдання 3.

// const time = {
//   hours: 20,
//   minutes: 30,
//   seconds: 45,
// };

// function formatNumber(num) {
//   return String(num).padStart(2, "0");
// }

// function showTime(time) {
//   console.log(
//     formatNumber(time.hours) +
//       ":" +
//       formatNumber(time.minutes) +
//       ":" +
//       formatNumber(time.seconds),
//   );
// }

// function timeToSeconds(time) {
//   return time.hours * 3600 + time.minutes * 60 + time.seconds;
// }

// function secondsToTime(totalSeconds) {
//   totalSeconds = totalSeconds % 86400;

//   if (totalSeconds < 0) {
//     totalSeconds = totalSeconds + 86400;
//   }

//   let hours = Math.floor(totalSeconds / 3600);
//   let minutes = Math.floor((totalSeconds % 3600) / 60);
//   let seconds = totalSeconds % 60;

//   return {
//     hours: hours,
//     minutes: minutes,
//     seconds: seconds,
//   };
// }

// function addSeconds(time, seconds) {
//   let totalSeconds = timeToSeconds(time);
//   totalSeconds = totalSeconds + seconds;

//   return secondsToTime(totalSeconds);
// }

// function addMinutes(time, minutes) {
//   return addSeconds(time, minutes * 60);
// }

// function addHours(time, hours) {
//   return addSeconds(time, hours * 3600);
// }

// // Завдання 1
// showCarInfo(car);
// console.log("Час у дорозі: " + calculateTravelTime(car, 1000) + " год.");

// // Завдання 2
// console.log(addFractions(fraction1, fraction2)); // 5/4
// console.log(subtractFractions(fraction1, fraction2)); // -1/4
// console.log(multiplyFractions(fraction1, fraction2)); // 3/8
// console.log(divideFractions(fraction1, fraction2)); // 2/3

// // Завдання 3
// showTime(time); // 20:30:45

// let newTime1 = addSeconds(time, 30);
// showTime(newTime1); // 20:31:15

// let newTime2 = addMinutes(time, 40);
// showTime(newTime2); // 21:10:45

// let newTime3 = addHours(time, 5);
// showTime(newTime3); // 01:30:45
