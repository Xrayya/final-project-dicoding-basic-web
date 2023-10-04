const hamburgerBtn = document.querySelector(".hamburger-button");
const nav = document.querySelector(".navbar > nav");

hamburgerBtn.addEventListener("click", () => {
  if (hamburgerBtn.classList.contains("hamburger-active")) {
    hamburgerBtn.classList.remove("hamburger-active");
    nav.classList.remove("nav-active");
  } else {
    hamburgerBtn.classList.add("hamburger-active");
    nav.classList.add("nav-active");
  }
});
