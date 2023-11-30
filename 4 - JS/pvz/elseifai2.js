let num1 = 2;
let num2 = 3;
let num3 = 6;

if (num1 > num2) {
  console.log("Pirmas didesnis uz antra");
} else if (num2 > num3) {
  console.log("Antras didesnis uz trecia");
} else if (num3 > num1) {
  console.log("Trecias didesnis uz pirma");
}

if (num1 == num2) {
  console.log("Pirmi du skaicia lygus");
} else if (num2 == num3) {
  console.log("Antras ir trecias lygus");
} else if (num1 == 0) {
  console.log("Pirmas skaicius yra nulis");
}

if (num2 < 0) {
  console.log("Antras skaicius neigiamas");
} else if (num3 > 0) {
  console.log("Trecias skaicius teigiamas");
}

let paz = 9;

if (paz == 10) {
  console.log("Puiku");
} else if (paz >= 9) {
  console.log("Labai gerai");
} else if (paz >= 7) {
  console.log("Gerai");
} else if (paz >= 5) {
  console.log("Patenkinamai");
} else if (paz < 5) {
  console.log("Failed");
}
