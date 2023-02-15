import { galleryItemArray } from "./gallery-items.js";
const shopCategories = document.querySelector(".shop-categories");
const shopItemContainer = document.getElementById("shop-item-container");
const shopCategoryHeader = document.getElementById("shop-category-header");

const modal = document.getElementById("modal");
const cartModal = document.querySelector(".cart-modal");
const categoryButtons = [...shopCategories.children];
const modalTotalPrice = document.getElementById("modal-total-price");
const modalQuantityMinus = document.getElementById("modal-quantity-minus");
const modalQuantityPlus = document.getElementById("modal-quantity-plus");
const modalQuantity = document.getElementById("modal-quantity");
const modalCloseButton = document.getElementById("modal-close-button");
const modalImage = document.getElementById("modal-image");
const modalInfoTitle = document.getElementById("modal-info-title");
const modalInfoType = document.getElementById("modal-info-type");
const modalInfoYear = document.getElementById("modal-info-year");
const modalPrintSize = document.getElementById("modal-print-size");
const modalAddItemToCart = document.getElementById("modal-add-item-to-cart");

var currentTotal = 0.0;
var currentQuantity = 0;
var currentPrintPrice = 0.0;
var currentPrintSize = null;
let currentCagtegory = "rabbit";

var cart = [];
const categoryArray = ["rabbit", "shoe", "camera", "portrait", "dragon"];
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

function addShopItemToCart(item) {
  cart.push(item);
  saveCartToLocalStorage();
  console.log(`@addShopItemToCart: ${item.title}`);
}

function saveCartToLocalStorage() {
  localStorage.setItem("cart", JSON.stringify(cart));
  console.log(`@saveCartToLocalStorage: ${cart.length} items in cart`);
}

function loadCartFromLocalStorage() {
  const cartFromLocalStorage = JSON.parse(localStorage.getItem("cart"));
  if (cartFromLocalStorage) {
    cart = cartFromLocalStorage;
  }
  console.log(`@loadCartFromLocalStorage: ${cart.length} items in cart`);
  return cartFromLocalStorage;
}

const renderAllShopItemsOfType = (type) => {
  galleryItemArray.forEach((item) => {
    if (item.type === type) {
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
  console.log(`@renderAllShopItemsOfType: ${type}`);
};

categoryButtons.forEach((categoryButton) => {
  categoryButton.addEventListener("click", (e) => {
    handleCategoryButton(e);
  });
});

const handleCategoryButton = (e) => {
  const button = e.target;
  const category = button.dataset.type;
  const categoryButtons = [...shopCategories.children];
  categoryButtons.forEach((categoryButton) => {
    categoryButton.classList.remove("active");
  });

  button.classList.add("active");
  shopCategoryHeader.innerHTML = `shop ${category} prints`;
  shopItemContainer.innerHTML = "";
  console.log(`@handleCategoryButton: ${category}`);
  renderAllShopItemsOfType(category);
};

const addItemToShop = (item) => {
  modal.classList.add("open"); //change modal class to open, display block

  //set modal data from item
  modalImage.src = item.image;
  modalInfoTitle.innerHTML = item.title;
  modalInfoType.innerHTML = item.type;
  modalInfoYear.innerHTML = item.year;

  //set current values
  currentPrintPrice = printSizes[0].price;
  currentPrintSize = printSizes[0].size;
  currentQuantity = 1;
  currentTotal = currentPrintPrice * currentQuantity;

  modalQuantity.innerHTML = currentQuantity;
  modalPrintSize.innerHTML = "";
  modalTotalPrice.innerHTML = `$${currentTotal}`;

  //attach print sizes
  printSizes.forEach((size) => {
    const option = document.createElement("option");
    option.value = size.size;
    option.innerHTML = `${size.size} - $${size.price}`;
    modalPrintSize.appendChild(option);
  });
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
//runs on every shop item
const handleShopItemClick = (e) => {
  // get item data
  const shopItem = e.target.closest(".shop-item");
  const shopItemTitle = shopItem.querySelector(".shop-item-title").textContent;
  const shopItemType = shopItem.querySelector(".shop-item-type").textContent;
  const shopItemYear = shopItem.querySelector(".shop-item-year").textContent;
  const shopItemImage = shopItem.querySelector(".shop-item-image").src;
  //make item object
  const item = {
    title: shopItemTitle,
    type: shopItemType,
    year: shopItemYear,
    image: shopItemImage,
  };

  console.log(`@handleShopItemClick: ${shopItemTitle}`);
  //open modal with item data
  addItemToShop(item);
};

function pageStuff() {}

function itemModalStuff() {
  const updateCurrentTotal = () => {
    currentTotal = (currentQuantity * currentPrintPrice).toFixed(2);
    modalTotalPrice.innerHTML = `$${currentTotal}`;
    console.log(`@updateCurrentTotal: ${currentTotal}`);
  };

  // Event Listeners
  modalAddItemToCart.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    handleAddItemToCart(e);
  });

  // --------------------------------------------------

  modalQuantityMinus.addEventListener("click", (e) => {
    handleQuantityMinus(e);
  });
  const handleQuantityMinus = (e) => {
    if (currentQuantity > 1) {
      currentQuantity--;
      modalQuantity.innerHTML = currentQuantity;
    }
    console.log(`@handleQuantityMinus: ${currentQuantity}`);
    updateCurrentTotal();
  };

  modalQuantityPlus.addEventListener("click", (e) => {
    handleQuantityPlus(e);
  });
  const handleQuantityPlus = (e) => {
    currentQuantity++;
    modalQuantity.innerHTML = currentQuantity;
    console.log(`@handleQuantityPlus: ${currentQuantity}`);
    updateCurrentTotal();
  };

  modalPrintSize.addEventListener("change", (e) => {
    handlePrintSizeChange(e);
  });

  const handlePrintSizeChange = (e) => {
    const size = e.target.value;
    const sizeObject = printSizes.find(
      (sizeObject) => sizeObject.size === size
    );
    currentPrintPrice = sizeObject.price;
    console.log(
      `@handlePrintSizeChange: ${e.target.value} x $${currentPrintPrice}`
    );
    updateCurrentTotal();
  };

  modalCloseButton.addEventListener("click", (e) => {
    handleModalClose(e);
  });

  // Event Handlers
  const handleModalClose = (e) => {
    console.log("@handleModalClose");
    modal.classList.remove("open");
  };

  //takes all modal data into object and adds to cart
  const handleAddItemToCart = (e) => {
    const modalData = {
      title: modalInfoTitle.textContent,
      type: modalInfoType.textContent,
      year: modalInfoYear.textContent,
      image: modalImage.src,
      printPrice: currentPrintPrice,
      printSize: currentPrintSize,
      quantity: currentQuantity,
      totalPrice: currentTotal,
    };

    addShopItemToCart(modalData);
    console.log(`@handleAddItemToCart: ${cart.length} items in cart`);
    handleModalClose(e);
  };

  renderAllShopItemsOfType(currentCagtegory);
}

function cartModalStuff() {
  const cartList = document.getElementById("cart-modal-list");
  const cartItems = [...document.querySelectorAll(".cart-item")];
  const openCartModal = document.getElementById("open-cart-modal");
  const closeCartModalButton = document.getElementById(
    "cart-modal-close-button"
  );
  const cartSubtotal = document.getElementById("cart-modal-total-subtotal");
  const cartTax = document.getElementById("cart-modal-total-tax");
  const cartTotal = document.getElementById("cart-modal-total-total");
  const cartModalTotalCheckout = document.getElementById(
    "cart-modal-total-checkout"
  );

  closeCartModalButton.addEventListener("click", (e) => {
    cartModal.classList.remove("open");
  });

  openCartModal.addEventListener("click", (e) => {
    console.log(`@openCartModal: ${cartItems.length} items in cart`);
    cartModal.classList.add("open");
    console.log(cartModal);
    renderCartItems();
    updateCartTotals();
  });

  const makeCartItem = (item) => {
    const cartItem = document.createElement("li");
    cartItem.classList.add("cart-item");
    cartItem.innerHTML = `
      <div class="cart-item-left">
        <div class="cart-item-image-container">
          <img
          class="cart-item-image"
          src="${item.image}"
          alt="${item.title}" />
        </div>
    </div>

    <div class="cart-item-middle">
      <div class="cart-item-info-container">
        <h3 class="cart-item-title">${item.title}</h3>
        <p class="cart-item-type">${item.type}</p>
        <p class="cart-item-year">${item.year}</p>
      </div>
    </div>

    <div class="cart-item-right">
      <div class="cart-item-selection-container">
        <p class="cart-item-print-size">Print Size: ${item.printSize}</p>
        <p class="cart-item-quantity">Quantity: ${item.quantity}</p>
        <p class="cart-item-total-price">$${item.totalPrice}</p>
    </div>

      <button class="cart-modal-remove-button">
    remove
      </button>

    </div>


    `;
    return cartItem;
  };

  const addRemoveToCartItems = () => {
    const cartRemoveButtons = [
      ...document.querySelectorAll(".cart-modal-remove-button"),
    ];

    cartRemoveButtons.forEach((button) => {
      button.addEventListener("click", (e) => {
        handleCartItemRemove(e);
        updateCartTotals();
      });
    });
  };

  const handleCartItemRemove = (e) => {
    const cartItem = e.target.closest(".cart-item");
    const cartItemTitle =
      cartItem.querySelector(".cart-item-title").textContent;
    const cartItemIndex = cart.findIndex(
      (item) => item.title === cartItemTitle
    );
    cart.splice(cartItemIndex, 1);
    renderCartItems();
    updateCartTotals();
    saveCartToLocalStorage();
    console.log(`@handleCartItemRemove: ${cartItemTitle} removed`);
  };

  const renderCartItems = () => {
    cartList.innerHTML = "";
    cart.forEach((item) => {
      cartList.appendChild(makeCartItem(item));
    });
    addRemoveToCartItems();
  };

  const updateCartTotals = () => {
    let subtotal = Number(0);
    cart.forEach((item) => {
      subtotal += Number(item.totalPrice);
    });

    subtotal = parseFloat(subtotal).toFixed(2);
    const tax = parseFloat(subtotal * 0.07).toFixed(2);
    const total = parseFloat(subtotal + tax).toFixed(2);
    cartSubtotal.innerHTML = `$${subtotal}`;
    cartTax.innerHTML = `$${tax}`;
    cartTotal.innerHTML = `$${total}`;
  };

  const handleCartCheckout = () => {
    console.log("@handleCartCheckout");
    cart = [];
    updateCartTotals();
    saveCartToLocalStorage();
    closeCartModal();
    renderCartItems();
  };

  cartModalTotalCheckout.addEventListener("click", handleCartCheckout);

  renderCartItems();
}
// Initialize
const init = () => {
  loadCartFromLocalStorage ? loadCartFromLocalStorage() : null;
  itemModalStuff();
  cartModalStuff();
};

init();
