let receptai = document.querySelectorAll(".receptas");
let input = document.querySelector(".block-wrapper input");
let portionSize = document.querySelector("#portion-size");
let ingridientai = document.querySelector(".ingridientai");

// Receptai
let kiekiai = {
  salotos: {
    Vista: 200,
    Spinatai: 50,
    Padazas: 10,
    Pupeles: 100,
  },
  tortas: {
    Miltai: 200,
    Kiausiniai: 1,
    Melynes: 50,
    Cukrus: 2,
  },
  makarai: {
    Miltai: 130,
    Kiausiniai: 3,
    Mesa: 100,
    Druska: 2,
  },
};

let rec1 = () => {
  ingridientai.innerHTML = `<p>Vista: <strong>${
    kiekiai.salotos.Vista * input.valueAsNumber
  } g</strong></p>`;
  ingridientai.innerHTML += `<p>Spinatai: <strong>${
    kiekiai.salotos.Spinatai * input.valueAsNumber
  } g</strong></p>`;
  ingridientai.innerHTML += `<p>Padazas: <strong>${
    kiekiai.salotos.Padazas * input.valueAsNumber
  } g</strong></p>`;
  ingridientai.innerHTML += `<p>Pupeles: <strong>${
    kiekiai.salotos.Pupeles * input.valueAsNumber
  } g</strong></p>`;
};

let rec2 = () => {
  ingridientai.innerHTML = `<p>Miltai: <strong>${
    kiekiai.tortas.Miltai * input.valueAsNumber
  } g</strong></p>`;
  ingridientai.innerHTML += `<p>Kiausiniai: <strong>${
    kiekiai.tortas.Kiausiniai * input.valueAsNumber
  } vnt</strong></p>`;
  ingridientai.innerHTML += `<p>Melynes: <strong>${
    kiekiai.tortas.Melynes * input.valueAsNumber
  } g</strong></p>`;
  ingridientai.innerHTML += `<p>Cukrus: <strong>${
    kiekiai.tortas.Cukrus * input.valueAsNumber
  } g</strong></p>`;
};

let rec3 = () => {
  ingridientai.innerHTML = `<p>Miltai: <strong>${
    kiekiai.makarai.Miltai * input.valueAsNumber
  } g</strong></p>`;
  ingridientai.innerHTML += `<p>Kiausiniai: <strong>${
    kiekiai.makarai.Kiausiniai * input.valueAsNumber
  } vnt</strong></p>`;
  ingridientai.innerHTML += `<p>Mesa: <strong>${
    kiekiai.makarai.Mesa * input.valueAsNumber
  } g</strong></p>`;
  ingridientai.innerHTML += `<p>Druska: <strong>${
    kiekiai.makarai.Druska * input.valueAsNumber
  } g</strong></p>`;
};

// Slider
input.addEventListener("input", () => {
  portionSize.textContent = input.valueAsNumber;
  //   Pajudinus slaideri ziuret kuris receptas paselektintas ir jam padaryt skaciavimus
  let selectedEl = document
    .querySelector("#tick")
    .classList.contains("selected");

  //   Each recipe
  let recipe1 = document.querySelector(".pirmas").firstElementChild;
  let recipe2 = document.querySelector(".antras").firstElementChild;
  let recipe3 = document.querySelector(".trecias").firstElementChild;

  if (recipe1.classList.contains("selected")) {
    rec1();
  } else if (recipe2.classList.contains("selected")) {
    rec2();
  } else if (recipe3.classList.contains("selected")) {
    rec3();
  }
});

// Pirmas receptas selection
document.querySelector(".pirmas").addEventListener("click", () => {
  document
    .querySelector(".antras")
    .firstElementChild.classList.remove("selected");
  document
    .querySelector(".trecias")
    .firstElementChild.classList.remove("selected");
  if (
    document
      .querySelector(".pirmas")
      .firstElementChild.classList.contains("selected")
  ) {
    document
      .querySelector(".pirmas")
      .firstElementChild.classList.remove("selected");
  } else {
    document
      .querySelector(".pirmas")
      .firstElementChild.classList.add("selected");
  }
  rec1();
});

// Antras receptas selection
document.querySelector(".antras").addEventListener("click", () => {
  document
    .querySelector(".pirmas")
    .firstElementChild.classList.remove("selected");
  document
    .querySelector(".trecias")
    .firstElementChild.classList.remove("selected");
  if (
    document
      .querySelector(".antras")
      .firstElementChild.classList.contains("selected")
  ) {
    document
      .querySelector(".antras")
      .firstElementChild.classList.remove("selected");
  } else {
    document
      .querySelector(".antras")
      .firstElementChild.classList.add("selected");
  }
  rec2();
});

// Trecias receptas selection
document.querySelector(".trecias").addEventListener("click", () => {
  document
    .querySelector(".pirmas")
    .firstElementChild.classList.remove("selected");
  document
    .querySelector(".antras")
    .firstElementChild.classList.remove("selected");
  if (
    document
      .querySelector(".trecias")
      .firstElementChild.classList.contains("selected")
  ) {
    document
      .querySelector(".trecias")
      .firstElementChild.classList.remove("selected");
  } else {
    document
      .querySelector(".trecias")
      .firstElementChild.classList.add("selected");
  }
  rec3();
});
