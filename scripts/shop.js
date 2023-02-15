import { galleryItemArray } from "./gallery-items.js";
const shopCategories = document.querySelector(".shop-categories");
const shopItemContainer = document.getElementById("shop-item-container");
const shopCategoryHeader = document.getElementById("shop-category-header");

const modal = document.getElementById("modal");

const categoryButtons = [...shopCategories.children];
const modalTotalPrice = document.getElementById("modal-total-price");

const cart = [];
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

function addItemToCart(item) {
  cart.push(item);
  console.log(`@addItemToCart: ${item.title}`);
}

function itemModalStuff() {
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

  const updateCurrentTotal = () => {
    currentTotal = (currentQuantity * currentPrintPrice).toFixed(2);
    modalTotalPrice.innerHTML = `$${currentTotal}`;
    console.log(`@updateCurrentTotal: ${currentTotal}`);
  };

  const addItemToModal = (item) => {
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

  function makeShopItem(
    type,
    title,
    subtitle,
    date,
    hqSrc,
    lqSrc,
    description
  ) {
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

  const makeAllItemsOfCatergory = (type) => {
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
    console.log(`@makeAllItemsOfCatergory: ${type}`);
  };

  // Event Listeners

  modalAddItemToCart.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    handleAddItemToCart(e);
  });

  
  // --------------------------------------------------
  categoryButtons.forEach((categoryButton) => {
    categoryButton.addEventListener("click", (e) => {
      handeCatergoryButtonClick(e);
    });
  });

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
    console.log(`@handeCatergoryButtonClick: ${category}`);
    makeAllItemsOfCatergory(category);
  };

  //runs on every shop item
  const handleShopItemClick = (e) => {
    // get item data
    const shopItem = e.target.closest(".shop-item");
    const shopItemTitle =
      shopItem.querySelector(".shop-item-title").textContent;
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
    addItemToModal(item);
  };

  //takes all modal data into object and adds to cart
  const handleAddItemToCart = (e) => {
    const modalData = {
      title: modalInfoTitle.textContent,
      type: modalInfoType.textContent,
      year: modalInfoYear.textContent,
      image: modalImage.src,
      printSize: currentPrintSize,
      quantity: currentQuantity,
      totalPrice: currentTotal,
    };

    addItemToCart(modalData);
    console.log(`@handleAddItemToCart: ${cart.length} items in cart`);
    handleModalClose(e);
  };

  makeAllItemsOfCatergory(currentCagtegory);
}

// Initialize
const init = () => {
  itemModalStuff();
};

init();
