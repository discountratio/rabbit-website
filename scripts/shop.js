import { galleryItemArray } from "./gallery-items.js";
const shopPage = document.getElementById("shop-page");
const shopCategories = document.querySelector(".shop-categories");
const shopItemContainer = document.getElementById("shop-item-container");
const shopCategoryHeader = document.getElementById("shop-category-header");
const categoryButtons = [...shopCategories.children];
const shopItems = [...shopItemContainer.children];
const shopItemModal = document.getElementById("modal");



const cart = [];
var currentTotal = 0.00;
var currentQuantity = 0;
var currentPrintSize = {};
let currentCagtegory = "rabbit";

const printSizes = [
  {
    size: "8x10",
    price: 8.99,
  },
  {
    size: "11x14",
    price: 12.99,
  },
  {
    size: "16x20",
    price: 16.99,
  },
  {
    size: "20x24",
    price: 20.99,
  },
  {
    size: "24x36",
    price: 24.99,
  },
  {
    size: "30x40",
    price: 30.99,
  },
  {
    size: "36x48",
    price: 36.99,
  },
  {
    size: "40x60",
    price: 40.99,
  },
];

const addItemToModal = (item) => {
  const shopItemModalContent = document.getElementById("modal-content");
  shopItemModal.classList.add("open");
  shopItemModalContent.innerHTML = `
  <div class="modal-left">

    <div class="modal-image-container">
        <img class="modal-image" src="${item.image}" alt="${item.title}" />
    </div>

    <div class="modal-info-container">
        <h3 class="modal-info-title">${item.title}</h3>
        <p class="modal-info-type">${item.type}</p>
        <p class="modal-info-year">${item.year}</p>
    </div>
  </div>

    <div class="modal-right">

    <div class="modal-selection-container">
    <label for="print-size" class="modal-selection-label">Print Size: </label>
       <select name="modal-print-size" id="modal-print-size" class="modal-selection-input" value=${currentPrintSize.price}>
    ${printSizes.map(
      (size) =>
        `<option class="modal-selection-input" value="${size.price}">${size.size} - $${size.price}</option>`
    )}
       </select>
      </div>

    <div class="modal-selection-container">
      <label for="print-quantity" class="modal-selection-label">Quantity: </label>
      <div class="modal-selection-input">
          <button class="modal-selection-button" id="modal-quantity-minus">-</button>
          <span id="modal-quantity">${currentQuantity}</span>
          <button class="modal-selection-button" id="modal-quantity-plus">+</button>
      </div>
  </div>
    <div class="modal-selection-container ">
      <p class="modal-selection-label">Total:   </p>   <p id="modal-total-price">$${currentTotal} </p>
    </div>
    <button class="add-item-to-cart button">Add to cart</button>
    <button class="close-modal-button" id="close-modal">&times;</button>
  </div>
    `;
};

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

  <div class="shop-item-info-container">
    <h3 class="shop-item-title">${title}</h3>
    <p class="shop-item-type">${type}</p>
    <p class="shop-item-year">${date}</p>
  </div>
    `;

  shopItem.addEventListener("click", (e) => {
    handleShopItemClick(e);
  });

  return shopItem;
}

const makeAllItemsOfType = (type) => {
  console.log(type)
  galleryItemArray.forEach((item) => {
    if (item.type === type) {
      console.log(item.type)
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
};

const handeCatergoryButtonClick = (e) => {
  const button = e.target;
  const category = button.dataset.type;
  const categoryButtons = [...shopCategories.children];
  categoryButtons.forEach((categoryButton) => {
    categoryButton.classList.remove("active");
  });

  button.classList.add("active");

  shopCategoryHeader.innerHTML = `shop ${category} prints`;
  shopItemContainer.innerHTML = "";
  makeAllItemsOfType(category);
};


//Event listeners
categoryButtons.forEach((button) => {
  button.addEventListener("click", () => {
    categoryButtons.forEach((categoryButton) => {
      categoryButton.classList.remove("active");
    });

    button.classList.add("active");
    const category = button.dataset.type;
    shopCategoryHeader.innerHTML = `shop ${category} prints`;

    if (category != currentCagtegory) {
      shopItemContainer.innerHTML = "";
      currentCagtegory = category;
      makeAllItemsOfType(currentCagtegory);
    }
  });
});

shopItemModal.addEventListener("click", (e) => {
  const closeModalButton = document.getElementById("close-modal");
  if (closeModalButton.classList.contains("close-modal")) {
    shopItemModal.classList.remove("open");
  }

  if (closeModalButton.classList.contains("add-item-to-cart")) {
    console.log("item added to cart");
    alert("item added to cart");

    console.log(cart);
  }
});


const init = () => {
  makeAllItemsOfType(currentCagtegory)
};

init();