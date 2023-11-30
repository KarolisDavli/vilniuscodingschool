let darboVal = 8;

let darPerVal = 4;
let darSkaicius = 5;
let kepaloSavikaina = 1;
let kepaloKaina = 3;
let uzsakymai = 40;

let kepalaiPerVienaDiena = darboVal * darPerVal * darSkaicius;
console.log("Is viso kepalu per diena:", kepalaiPerVienaDiena);

let visuKepaluSavikaina = kepalaiPerVienaDiena * kepaloSavikaina;
let gautosPajamos = kepalaiPerVienaDiena * kepaloKaina;
let gautasPelnas = gautosPajamos - visuKepaluSavikaina;
console.log("Kepalu pelnas per diena:", gautasPelnas);

if (uzsakymai <= kepalaiPerVienaDiena) {
  console.log("Dienos uzsakymas ivykdytas");
} else {
  console.log(
    "Dienos uzsakymas neivykdytas, truksta:",
    uzsakymai - kepalaiPerVienaDiena
  );
}

let perlnasIsParduotuKepalu =
  uzsakymai * kepaloKaina - uzsakymai * kepaloSavikaina;
console.log("Pelnas is parduotu kepalu siandien:", perlnasIsParduotuKepalu);

// SWITCH
let kintamasis = 2;

switch (kintamasis) {
  case 1:
    console.log("Vanduo");
    break;
  case 2:
    console.log("Limonadas");
    break;
  case 3:
    console.log("Arbata");
    break;
  case 4:
    console.log("Kava");
    break;
  default:
    console.log("Nei sis, nei tas");
    break;
}

let num1 = 5;
let num2 = 7;
let num3 = 12;

if (num1 == 1) {
  console.log(num1 + num2 + num3);
} else if (num1 == 2) {
  console.log(num2 * num3);
} else if (num1 == 3) {
  console.log(Math.pow(num1, 2));
} else {
  console.log("Nei sis, nei tas");
}

let klaidosKodas = 404;

switch (klaidosKodas) {
  case 403:
    console.log("Nieko tokio");
    break;
  case 404:
    console.log("Puslapis nerastas");
    break;
  case 405:
    console.log("Ajajai");
  default:
    break;
}
