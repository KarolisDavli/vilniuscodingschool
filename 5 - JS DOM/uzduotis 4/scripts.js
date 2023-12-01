let tab1 = document.getElementById("tab1");
let tab2 = document.getElementById("tab2");
let tab3 = document.getElementById("tab3");

let content1 = document.getElementById("content1");
let content2 = document.getElementById("content2");
let content3 = document.getElementById("content3");

let tabs = document.querySelectorAll(".tab");

tabs.forEach((tab) => {
  tab.addEventListener("click", (e) => {
    if (!e.target.classList.contains("tab-active")) {
      tab1.classList.remove("tab-active");
      tab2.classList.remove("tab-active");
      tab3.classList.remove("tab-active");
      e.target.classList.add("tab-active");
      console.log(e.target.id);
      if (e.target.id == "tab1") {
        content2.classList.remove("selected");
        content3.classList.remove("selected");
        content2.classList.add("hidden");
        content3.classList.add("hidden");
        content1.classList.remove("hidden");
        content1.classList.add("selected");
      } else if (e.target.id == "tab2") {
        content1.classList.remove("selected");
        content3.classList.remove("selected");
        content1.classList.add("hidden");
        content3.classList.add("hidden");
        content2.classList.remove("hidden");
        content2.classList.add("selected");
      } else if (e.target.id == "tab3") {
        content1.classList.add("hidden");
        content2.classList.add("hidden");
        content1.classList.remove("selected");
        content2.classList.remove("selected");
        content3.classList.remove("hidden");
        content3.classList.add("selected");
      }
    }
  });
});
