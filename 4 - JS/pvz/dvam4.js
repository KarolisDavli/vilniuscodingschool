let number = 3;
console.log(Math.pow(number, 2));
console.log(Math.pow(number, 3));

let num1 = 2;
let num2 = 3;
let num3 = 4;

console.log("Suma:", num1 + num2 + num3);
console.log("Sandauga:", num1 * num2 * num3);

let num4 = 6;
let num5 = 5;

console.log("Suma:", num4 + num5);
console.log("Skirtumas:", num4 - num5);
console.log("Kita sandauga:", (num4 + num5) * (num4 - num5));
console.log("Dalmuo:", (num4 + num5) / (num4 - num5));

let num6 = 1;
let num7 = 2;
let num8 = 3;
let num9 = 4;
console.log("Vidurkis:", (num6 + num7 + num8 + num9) / 4);

console.log("-----5------");
// 5 UZDUOTIS
console.log(4 + 5);
console.log(4 - 5);
console.log(4 * 5);
console.log(4 / 5);

console.log("-----6------");
// 6 UZDUOTIS
console.log(-1 + 4 * 6);
console.log((35 + 5) % 7);
console.log(14 + (-4 * 6) / 12);
console.log(2 + (15 / 6) * 1 - (7 % 2));

console.log("-----7------");
// 7 UZDUOTIS
let kart = 5;
console.log(
  kart * 1,
  kart * 2,
  kart * 3,
  kart * 4,
  kart * 5,
  kart * 6,
  kart * 7,
  kart * 8,
  kart * 9,
  kart * 10
);

console.log("-----8------");
// 8 UZDUOTIS
let doubleDigit = 58;
let firstDigit = Math.floor(doubleDigit / 10);
let secondDigit = doubleDigit % 10;

console.log("Skaitmenu suma:", firstDigit + secondDigit);
