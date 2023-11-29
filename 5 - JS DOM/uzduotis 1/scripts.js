let calcBtn = document.getElementById("calculate");

calcBtn.addEventListener("click", () => {
  let employeesCount = parseInt(
    document.getElementById("employees-count").value
  );
  let employeeMakesPerDay = parseInt(
    document.getElementById("employee-makes-per-day").value
  );
  let dayReservations = parseInt(
    document.getElementById("day-reservations").value
  );

  let bakeryTotal = employeesCount * employeeMakesPerDay;
  let isBakeryGonnaMakeIt = bakeryTotal >= dayReservations;

  let resulstDiv = document.getElementById("results");
  resulstDiv.innerHTML = `<p><strong>Kepykla per diena spes pagaminti: </strong> ${bakeryTotal} kepalu</p>`;
  resulstDiv.innerHTML += `<p><strong>Jai reikia speti pagaminti: </strong>${dayReservations} kepalu</p>`;
  resulstDiv.innerHTML += `<p><strong>Ar spes?</strong> ${
    isBakeryGonnaMakeIt ? "taip" : "ne"
  }</p>`;
});

document.getElementById("employees-count").addEventListener("keyup", (e) => {
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
  .getElementById("employee-makes-per-day")
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

document.getElementById("day-reservations").addEventListener("change", (e) => {
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
  document.getElementById("employees-count").value = 0;
  document.getElementById("employee-makes-per-day").value = 0;
  document.getElementById("day-reservations").value = 0;
  document.getElementById("results").innerHTML = "<p>Kol kas nieko nera</p>";
});
