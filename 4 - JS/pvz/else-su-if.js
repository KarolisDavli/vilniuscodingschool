let skaicius = 5;

if (skaicius % 2 == 0) {
  console.log("Skaicius lyginis");
} else {
  console.log("Skaicius nelyginis");
}

let skaicius2 = 6;

if (skaicius2 % 7 == 0) {
  console.log("Skaicius dalus is 7");
} else {
  console.log("Skaicius nedalus is 7");
}

let path = "folderis/failas.js";

if (path.endsWith(".js")) {
  console.log("Failas yra js tipo");
} else {
  console.log("Failas nera js tipo");
}
// +++++++++++++++++++++++++++++++++
// +++++++++++++++++++++++++++++++++
let num1 = 5;

if (num1 % 2 == 0) {
  console.log("Skaicius lyginis");
} else if (num1 % 5 == 0) {
  console.log("Skaicius dalinasi is 5");
} else if (num1 == 3) {
  console.log("Skaicius lygus 3");
} else {
  console.log("Nei sis, nei tas");
}

let num2 = 6;
let num3 = 7;
let num4 = 2;

if (num2 == num3) {
  console.log("Pirmi du skaiciai yra lygus");
} else if (num2 == num4) {
  console.log("Pirmas ir paskutinis skaiciai yra lygus");
} else if (num4 > num2) {
  console.log("Trecias skaicius didesnis uz pirmas");
} else if (num3 == num4 * 2) {
  console.log("Antras skaičius lygus dvigubai trečio skaičiaus reikšmei");
} else if (num2 % 3 == 0) {
  console.log("Pirmas skaicius dalinasi is 3");
} else {
  console.log("Nei sis, nei tas");
}
