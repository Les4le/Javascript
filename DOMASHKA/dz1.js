// // 1

// let symbol = prompt("whats yo name again?");
// alert(`yup hi ${symbol}`);

// // 2

// const tYear = 2026;
// let num = prompt("ti kogda rodilsya?");
// alert(`cheliku vot stoko let -> ${tYear - num}`);

// // 3

// let num = prompt("storona kvadrate pozaza");
// alert(`perimetr ${num * 4}`);

// // 4

// let num = prompt("radius");
// let resultnum = num * num;
// let resultnum2 = resultnum * 3.14;
// alert(`Ploshad ${resultnum2}`);

// // // 5
// let distance = prompt("Введіть відстань між містами (км):");
// let hours = prompt("За скільки годин потрібно дістатися?");
// let speed = distance / hours;
// alert("Необхідна швидкість: " + speed + " км/год");

// // 6

// const USD_TO_EUR = 0.88;
// let dollars = prompt("Введіть суму в доларах:");
// let euros = dollars * USD_TO_EUR;
// alert("У євро: " + euros);

// 7

// let flashGB = prompt("Введіть обсяг флешки (ГБ):");
// let flashMB = flashGB * 1024;
// let filesCount = Math.floor(flashMB / 820);
// alert("На флешку поміститься " + filesCount + " файлів");

// 8

// let money = prompt("Скільки грошей у вас в гаманці?");
// let chocolatePrice = prompt("Вартість однієї шоколадки:");
// let chocolates = Math.floor(money / chocolatePrice);
// let change = money % chocolatePrice;
// alert("Ви можете купити " + chocolates + " шоколадок. Здача: " + change);

// 9

// let number = prompt("Введіть тризначне число:");
// let hundreds = Math.floor(number / 100);
// let tens = Math.floor((number % 100) / 10);
// let ones = number % 10;
// let reversed = ones * 100 + tens * 10 + hundreds;
// alert("Число-перевертень: " + reversed);

// // 10

// let num = prompt("Введіть ціле число:");
// let result = (num % 2 === 0 && "Парне") || "Непарне";
// alert(result);
