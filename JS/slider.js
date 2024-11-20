const inspirationList = document.getElementById("inspirationList");
const images = document.querySelectorAll(".inspiration-list__img");
const btnNext = document.getElementById("btnNext");
const btnPrev = document.getElementById("btnPrev");
let current = 0;

btnNext.addEventListener("click", (evt) => {
  evt.preventDefault();
  inspirationList.scrollLeft += 396;
});

btnPrev.addEventListener("click", (evt) => {
  evt.preventDefault();
  inspirationList.scrollLeft -= 396;
});


const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const inspirationInfo = entry.target.nextElementSibling;
    if (entry.isIntersecting) {
      inspirationInfo.classList.add("show");
    } else {
      inspirationInfo.classList.remove("show");
    }
  });
});

images.forEach((el) => observer.observe(el));

