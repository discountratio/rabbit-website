import { galleryItemArray } from "./gallery-items.js";

const shopPage = document.getElementById("shop-page");
const shopCategories = document.getElementById("shop-categories");

const shopItemContainer = document.getElementById("shop-item-container");
const shopCategoryHeader = document.getElementById("shop-category-header");

const categoryButtons = [...shopCategories.children];
const shopItems = [...shopItemContainer.children];

console.log(categoryButtons);
console.log(galleryItemArray);

categoryButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const category = button.dataset.category;
        console.log(category);
        shopCategoryHeader.innerHTML = category;
        shopItemContainer.innerHTML = "";
        galleryItemArray.forEach((item) => {
            if (item.type === category) {
                shopItemContainer.appendChild(
                    makeShopItem(
                        item.type,
                        item.title,
                        item.subtitle,
                        item.date,
                        item.hqSrc,
                        item.lqSrc,
                        item.description
                    )
                );
            }
        });
    });
});


//Functions
function makeShopItem(type, title, subtitle, date, hqSrc, lqSrc, description) {
  const shopItem = document.createElement("div");
  shopItem.classList.add("shop-item");
  shopItem.innerHTML = `
    <div class="shop-item-image-container">
    <img
      class="shop-item-image"
      src="${hqSrc}"
      alt="${title}" />
  </div>
  <div class="shop-item-info">
    <h3 class="shop-item-title">${title}</h3>
    <p class="shop-item-type">${type}</p>
    <p class="shop-item-year">${date}</p>
  </div>
    `;

  //Event listeners
//   const shopItemButton = shopItem.querySelector(".shop-item__button");
//   shopItemButton.addEventListener("click", () => {
//     console.log(`${title} added to cart`);
//   });

  return shopItem;
}

categoryButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const category = button.dataset.type;   
        shopCategoryHeader.innerHTML = category;
        
    galleryItemArray.forEach((item) => {
        if (item.type === category) {

        shopItemContainer.appendChild(
            makeShopItem(
            item.type,
            item.title,
            item.subtitle,
            item.date,
            item.hqSrc,
            item.lqSrc,
            item.description
            )
        );
        }
    });
    });
});
