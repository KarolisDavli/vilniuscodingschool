let prevBtn = document.getElementById("prev");
let nextBtn = document.getElementById("next");
let mainImage = document.getElementById("main-image");
let imgItem = document.querySelectorAll(".img-item");
let allImages = document.querySelectorAll(".single-image");
let carouselCount = 0;

// Selection by image
allImages.forEach((singleImg) => {
  singleImg.addEventListener("click", (e) => {
    removeActive();
    e.target.parentElement.classList.add("active");
    mainImage.attributes["src"].value = e.target.attributes["src"].value;
  });
});

// Buttons
prevBtn.addEventListener("click", (e) => {
  carouselCount--;
  removeActive();
  if (carouselCount == -1) {
    carouselCount = 4;
  }
  setImageWithButtons();
});

nextBtn.addEventListener("click", (e) => {
  carouselCount++;
  removeActive();
  if (carouselCount == 5) {
    carouselCount = 0;
  }
  setImageWithButtons();
});

// Remove active class from all elements
let removeActive = () => {
  imgItem.forEach((item) => {
    item.classList.remove("active");
  });
};

let setImageWithButtons = () => {
  allImages[carouselCount].parentElement.classList.add("active");
  mainImage.attributes["src"].value =
    allImages[carouselCount].attributes["src"].value;
};
