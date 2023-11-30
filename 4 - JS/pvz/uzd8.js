let num1 = 46;
let num2 = 44;
let num3 = 12;

if (num1 > num2 && num1 > num3) {
  console.log("pirmas skaicius didziausias");
} else if (num2 > num1 && num2 > num3) {
  console.log("Antras skaicius didziausas");
} else {
  console.log("Trecias skaicius didziausas");
}

if (num1 < num2 && num1 < num3) {
  console.log("pirmas skaicius maziausias");
} else if (num2 < num1 && num2 < num3) {
  console.log("Antras skaicius maziausias");
} else {
  console.log("Trecias skaicius maziausias");
}

let paz1 = 6;
let paz2 = 2;
let paz3 = 10;

let vidurkis = (paz1 + paz2 + paz3) / 3;

if (vidurkis >= 8 && vidurkis <= 10) {
  console.log("Labai gerai");
} else if (vidurkis >= 5 && vidurkis <= 8) {
  console.log("Gerai");
} else {
  console.log("Reik dar pasimokyt");
}

let sk1 = 5;
let sk2 = 33;

if (sk1 > sk2 || sk1 == 0) {
  console.log("4.1");
}

if (sk2 > sk1 || sk2 == 5) {
  console.log("4.2");
}

if (sk1 > sk2 && sk1 == 20) {
  console.log("4.3");
}

if (sk2 > sk1 && sk2 < 100) {
  console.log(4.4);
}
