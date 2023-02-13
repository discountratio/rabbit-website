import { galleryItemArray } from "./gallery-items";
const shopPage = document.getElementById("shop-page");
const shopCategories = document.getElementById("shop-categories");

const shopItemContainer = document.getElementById("shop-item-container");
const shopCategoryHeader = document.getElementById("shop-category-header");

const categoryButtons = [...shopCategories.children];
const shopItems = [...shopItemContainer.children];


console.log(categoryButtons);
console.log(galleryItemArray);

//Functions
function makeShopItem(type, title, subtitle, date, hqSrc, lqSrc, description) {
    const shopItem = document.createElement("div");
    shopItem.classList.add("shop-item");
    shopItem.innerHTML = `
    <div class="shop-item__image-container">
        <img
        src="${hqSrc}"
        srcset="${hqSrc} 2x, ${lqSrc} 1x"
        alt="${title} of ${subtitle} by ${date}"
        class="shop-item__image"
        />
    </div>
    <div class="shop-item__info">
        <h3 class="shop-item__title">${title}</h3>
        <h4 class="shop-item__subtitle">${subtitle}</h4>
        <p class="shop-item__description">${description}</p>
        <button class="shop-item__button">Add to cart</button>
    </div>
    `;
    
    //Event listeners
    const shopItemButton = shopItem.querySelector(".shop-item__button");
    shopItemButton.addEventListener("click", () => {
        console.log(`${title} added to cart`);
    });
    
    return shopItem;
    }
