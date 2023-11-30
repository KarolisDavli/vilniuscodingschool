let num1 = 14;
let num2 = 9;
let num3 = 12;

console.log("----1.1----");
console.log(num1 == num2);

console.log("----1.2----");
console.log(num2 == num3);

console.log("----1.3----");
console.log(num1 > num2);

console.log("----1.4----");
console.log(num2 > num3 * 2);

console.log("----1.5----");
console.log(num1 % 2 == 0);

console.log("----1.6----");
console.log(num2 % 2 != 0);

console.log("----1.7----");
console.log(num3 > 0);

console.log("----1.8----");
console.log(num1 < 0);

console.log("----1.9----");
console.log(num2 % 4 == 0);

console.log("----1.10----");
console.log(num3 % 8 == 0);

console.log("----2----");
let age = 19;
console.log(age >= 18 ? "Jus galite balsuoti" : "");

console.log("----3----");
let paz1 = 8;
let paz2 = 9;
console.log((paz1 + paz2) / 2 >= 5 ? "Vidurkis teigiamas" : "");

console.log("----4----");
let sk1 = 5;

console.log("----4.1----");
if (sk1 % 5 == 0) {
  for (let i = 0; i <= 5; i++) {
    console.log(sk1 * i);
  }
}

console.log("----4.2----");
if (sk1 % 2 == 0) {
  console.log((sk1 * sk1) / 2);
}

console.log("----4.3----");
if (sk1 % 7 !== 0) {
  let sk2 = 6;
  console.log(sk1 + sk2, sk1 - sk2, sk1 * sk2, sk1 / sk2);
}
