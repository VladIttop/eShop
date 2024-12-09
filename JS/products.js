import products from "../JSON/products.json";
console.log(products);

const productsList = document.querySelector(".products-list");
let itemsToShow = 8;
 
products.slice(0, itemsToShow).forEach((element) => {
  const li = document.createElement("li");
  li.classList.add("products-list__item");
  const isDiscount = function () {
    const div = document.createElement("div");
    const p = document.createElement("p");
    p.classList.add("discount__value");

    if (element.discount) {
      p.textContent = element.discount;
      div.classList.add("discount");
    } else if (element.new) {
      p.textContent = element.new;
      div.classList.add("new");
    }
    li.prepend(div);
    div.appendChild(p);
  };
  isDiscount();
  li.innerHTML += `
  <img
    src="${element.image}"
    alt="${element.name}"
    class="products-list__image"
  />
  <div class="products-list-content">
    <h3 class="products-list__title">${element.name}</h3>
    <p class="products-list__subtitle">${element.subtitle}</p>
    <div class="products-list-prices">
      <p class="products-list-prices__value">${element.price}</p>
      <p class="products-list-prices__strikethrough">
      ${element.strikethrough}
      </p>
    </div>
  </div>
`;
productsList.appendChild(li);
});
