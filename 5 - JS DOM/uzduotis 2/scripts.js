let calcBtn = document.getElementById("calculate");

calcBtn.addEventListener("click", () => {
  let spurgytesKcal = parseInt(
    document.getElementById("spurgytes-kalorijos").value
  );
  let eatenSpurgytes = parseInt(
    document.getElementById("spurgyciu-suvalgau-per-diena").value
  );
  let kcalLimit = parseInt(
    document.getElementById("dienos-kaloriju-norma").value
  );

  let countedCalories = eatenSpurgytes * spurgytesKcal;
  let isCaloriesAboveLimit = countedCalories >= kcalLimit;
  let remainingKcal = kcalLimit - countedCalories;
  let remainingSpurgytes = Math.floor(remainingKcal / spurgytesKcal);

  let resulstDiv = document.getElementById("results");
  resulstDiv.innerHTML = `<p><strong>Bendros kalorijos is suvalgytu spurgyciu: </strong> ${countedCalories} kcal</p>`;
  resulstDiv.innerHTML += `<p><strong>Jei dienos kaloriju norma yra: </strong>${kcalLimit} kcal</p>`;
  resulstDiv.innerHTML += `<p><strong>Ar bus virsyta kaloriju norma?</strong> ${
    isCaloriesAboveLimit ? "Taip" : "Ne"
  }</p>`;
  resulstDiv.innerHTML += `<p><strong>Liko suvartoti: </strong>${
    remainingKcal >= 0 ? remainingKcal + " kaloriju" : "Reiktu eit pajudet"
  } </p>`;
  resulstDiv.innerHTML += `<p><strong>Liko suvalgyti: </strong>${
    remainingSpurgytes >= 0 ? remainingSpurgytes + " spurgytes" : "Gana est"
  } </p>`;
});

document
  .getElementById("spurgytes-kalorijos")
  .addEventListener("keyup", (e) => {
    let inputValue = e.target.valueAsNumber;

    if (inputValue < 0) {
      e.target.classList.add("error");
      e.target.nextElementSibling.classList.add("show");
    } else {
      e.target.classList.remove("error");
      e.target.nextElementSibling.classList.remove("show");
    }
  });

document
  .getElementById("spurgyciu-suvalgau-per-diena")
  .addEventListener("keyup", (e) => {
    let inputValue = e.target.valueAsNumber;

    if (inputValue < 0) {
      e.target.classList.add("error");
      e.target.nextElementSibling.classList.add("show");
    } else {
      e.target.classList.remove("error");
      e.target.nextElementSibling.classList.remove("show");
    }
  });

document
  .getElementById("dienos-kaloriju-norma")
  .addEventListener("change", (e) => {
    let inputValue = e.target.valueAsNumber;

    if (inputValue < 0) {
      e.target.classList.add("error");
      e.target.nextElementSibling.classList.add("show");
    } else {
      e.target.classList.remove("error");
      e.target.nextElementSibling.classList.remove("show");
    }
  });

document.getElementById("reset").addEventListener("click", () => {
  document.getElementById("spurgytes-kalorijos").value = 0;
  document.getElementById("spurgyciu-suvalgau-per-diena").value = 0;
  document.getElementById("dienos-kaloriju-norma").value = 0;
  document.getElementById("results").innerHTML =
    "<p>Nera spurgyciu - nera kaloriju</p>";
});
