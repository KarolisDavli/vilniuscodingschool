document.getElementById("siurprizas").addEventListener("click", (e) => {
  alert("yo");
});

document.querySelector("#text button").addEventListener("click", (e) => {
  e.target.nextElementSibling.textContent = "Jega";
});

let mygtukai = document.querySelectorAll("#kuris button");

mygtukai.forEach((mygtukas) => {
  mygtukas.addEventListener("click", (e) => {
    document.querySelector("#kuris p span").textContent = e.target.textContent;
  });
});

// Didinti - Mazinti
let mygDidinti = document.getElementById("didinti");
let mygMazinti = document.getElementById("mazinti");
let counterEl = document.querySelector("#counteris p strong");

mygDidinti.addEventListener("click", () => {
  counterEl.textContent = parseInt(counterEl.textContent) + 1;
});

mygMazinti.addEventListener("click", () => {
  counterEl.textContent = parseInt(counterEl.textContent) - 1;
});

let blokas = document.getElementById("blokas");

blokas.addEventListener("click", () => {
  document.getElementById("slaptas").textContent = "Top Secret";
});
