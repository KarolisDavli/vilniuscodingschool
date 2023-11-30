let blokas1 = document.getElementById("blokas1");
blokas1.style.color = "red";
blokas1.style.backgroundColor = "#f2f2f2";
blokas1.style.border = "1px solid black";

let blokas3Span = document.querySelector("#blokas3 p span");
let blokas3Myg = document.querySelector("#blokas3 button");

blokas3Myg.addEventListener("click", () => {
  let skaicius = parseInt(blokas3Span.textContent);
  if (skaicius % 2 == 0) {
    blokas3Span.style.backgroundColor = "green";
    blokas3Span.style.color = "white";
  } else {
    blokas3Span.style.backgroundColor = "red";
    blokas3Span.style.color = "white";
  }
});

let inputas = document.querySelector("#blokas4 input");
let rangeReiksme = document.querySelector("#rangeReiksme");
let rangeKoks = document.querySelector("#rangeKoks");

inputas.addEventListener("input", () => {
  rangeReiksme.textContent = inputas.valueAsNumber;
  if (inputas.valueAsNumber % 2 == 0) {
    rangeKoks.textContent = "Skaicius lyginis";
    rangeKoks.style.color = "green";
  } else {
    rangeKoks.textContent = "Skaicius nelyginis";
    rangeKoks.style.color = "red";
  }
});
