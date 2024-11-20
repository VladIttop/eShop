const toAnimate = document.querySelectorAll(".browse-list");
const observer = new IntersectionObserver((entries) => {
  entries.forEach((element) => {
    if (element.isIntersecting) {
      element.target.classList.add("show");
    } else {
      element.target.classList.remove("show");
    }
  });
});
toAnimate.forEach((el) => observer.observe(el));
