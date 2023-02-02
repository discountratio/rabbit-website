const cart = document.getElementById("cart");

/*
    The purpsoe of this function is to create a new cart item from the mason item that was clicked.
    It takes the title and images of the mason item and creates a new cart item with the same information,
    as well as quantity buttons and print size options. 
*/
const printSizeOptions = [
  { value: "4x6", text: "8x10", price: 4.99 },
  { value: "5x7", text: "5x7", price: 4.99 },
  { value: "8x10", text: "8x10", price: 7.99 },
  { value: "11x14", text: "11x14", price: 9.99 },
  { value: "16x20", text: "16x20", price: 14.99 },
  { value: "20x24", text: "20x24", price: 19.99 },
  { value: "24x36", text: "24x36", price: 24.99 },
  { value: "30x40", text: "30x40", price: 29.99 },
  { value: "40x60", text: "40x60", price: 39.99 },
];

const totalPrice = (price, quantity) => {
  return (price * quantity).toFixed(2);
};


/* LOCAL STORAGE FUNCTIONS
function updateLocalStorage() {
  const cartItems = document.querySelectorAll(".cart-item");
  const cartItemsArray = [];
  cartItems.forEach((item) => {
    const itemObject = {
      title: item.querySelector(".cart-item-title").textContent,
      price: item.querySelector(".cart-item-price").textContent,
      quantity: item.querySelector(".cart-item-quantity").textContent,
      total: item.querySelector(".cart-item-total").textContent,
      printSize: item.querySelector(".cart-item-print-size").textContent,
      srcset: item.querySelector(".cart-item-image").srcset,
    };
    cartItemsArray.push(itemObject);
  });

  localStorage.setItem("cartItems", JSON.stringify(cartItemsArray));
}

function cartFromLocalStorage() {
  const cartItems = JSON.parse(localStorage.getItem("cartItems"));
  if (cartItems) {
    cartItems.forEach((item) => {
      addToCart(item.title, item.srcset, item.price, item.quantity, item.total, item.printSize);
    });
  }
}

function renderCart() {
  cartFromLocalStorage();
  updateCartTotal();
}

*/



function getAllTotals () {
  const cartItems = document.querySelectorAll('.cart-item');
  let total = 0;
  cartItems.forEach((item) => {
    const itemTotal = item.querySelector('.cart-item-total');
    total += Number(itemTotal.textContent.split('$')[1]);
  });
  return total.toFixed(2);
}

export function updateCartTotal () {
  const cartTotal = document.querySelector('#cart-total');
  cartTotal.textContent = `Cart Total: $${getAllTotals()}`;
}


export function addToCart(title, srcset) {
  // Containers ------------------------------------------------------------------------------------
  // elements
  const cartItem = document.createElement("div"); //contians img and text
  const cartItemImageContainer = document.createElement("div");

  const cartItemTextContainer = document.createElement("div"); //contains all below
  const cartItemQuantityContainer = document.createElement("div");
  const cartItemTitleContainer = document.createElement("div");
  const cartItemTotalContainer = document.createElement("div");
  const cartItemPrintSizeContainer = document.createElement("div");
  const cartItemRemoveContainer = document.createElement("button");
  // classes
  cartItem.classList.add("cart-item");
  cartItemImageContainer.classList.add("cart-item-image-container");

  cartItemTextContainer.classList.add("cart-item-text-container");
  cartItemQuantityContainer.classList.add(
    "cart-item-quantity-button-container",
    "cart-item-container"
  );
  cartItemTitleContainer.classList.add("cart-item-title-container");
  cartItemTotalContainer.classList.add(
    "cart-item-total-container",
    "cart-item-container"
  );
  cartItemPrintSizeContainer.classList.add(
    "cart-item-print-size-container",
    "cart-item-container"
  );
  cartItemRemoveContainer.classList.add("cart-item-remove-container");

  //   ************************************************************************************************

  //Components  ------------------------------------------------------------------------------------
  // Image
  // elements
  const cartItemImage = document.createElement("img");

  // classes
  cartItemImage.classList.add("cart-item-image");

  // content
  cartItemImage.src = srcset.trim().split(" ")[0];
  cartItemImage.srcset = srcset;
  cartItemImage.alt = title;

  // append
  cartItemImageContainer.appendChild(cartItemImage);

  // ----------------------------------------------------------------------------------------------
  // Title
  // elements
  const cartItemTitle = document.createElement("h3");

  // classes
  cartItemTitle.classList.add("cart-item-title");

  // content
  cartItemTitle.textContent = `${title}`;

  // append
  cartItemTitleContainer.appendChild(cartItemTitle);

  // ----------------------------------------------------------------------------------------------
  //Print Size Selector
  // elements
  const printSizeSelector = document.createElement("select");
  const printSizeSelectorLabel = document.createElement("span");

  // classes
  printSizeSelector.classList.add("print-size-selector");
  printSizeSelectorLabel.classList.add(
    "print-size-selector-label",
    "cart-item-label"
  );
  // content
  printSizeSelectorLabel.textContent = "Print size: ";

  // event listeners, update item price and total price
  printSizeSelector.onchange = (e) => {
    console.log(e.target.value);
    console.log(e.target.options[e.target.selectedIndex].price);
    price = e.target.options[e.target.selectedIndex].price;
    cartItemTotal.textContent = `Total: $${totalPrice(price, quantity)}`;
    updateCartTotal();

  };

  // Options rendered from array, append options to selector
  printSizeOptions.forEach((option) => {
    const printSizeOption = document.createElement("option");
    printSizeOption.value = option.value;
    printSizeOption.price = option.price;
    printSizeOption.text = `${option.text} - $${option.price}`;
    printSizeSelector.append(printSizeOption);
  });

  console.log(printSizeSelector);
  //append

  cartItemPrintSizeContainer.append(printSizeSelectorLabel, printSizeSelector);

  // ----------------------------------------------------------------------------------------------
  // Quantity
  // variables
  let quantity = 1;
  let price = printSizeSelector.options[printSizeSelector.selectedIndex].price;

  // elements
  const cartItemQuantityLabel = document.createElement("label");
  const cartItemQuantity = document.createElement("span");
  const cartItemQuantityUp = document.createElement("button");
  const cartItemQuantityDown = document.createElement("button");
  const cartItemQuantityButtons = document.createElement("div");
  // classes
  cartItemQuantityLabel.classList.add(
    "cart-item-quantity-label",
    "cart-item-label"
  );
  cartItemQuantity.classList.add("cart-item-quantity");
  cartItemQuantityUp.classList.add("cart-item-quantity-up");
  cartItemQuantityDown.classList.add("cart-item-quantity-down");
  cartItemQuantityButtons.classList.add("cart-item-quantity-buttons");

  // content
  cartItemQuantityLabel.textContent = "Quantity: ";
  cartItemQuantityLabel.for = "cart-item-quantity";
  cartItemQuantity.textContent = `${quantity}`;
  cartItemQuantityUp.textContent = "+";
  cartItemQuantityDown.textContent = "-";

  //event listeners
  cartItemQuantityUp.addEventListener("click", (e) => {
    e.stopPropagation();
    handleQuantityUpButton();
  });

  cartItemQuantityDown.addEventListener("click", (e) => {
    e.stopPropagation();
    handleQuantityDownButton();
  });

  //button handlers
  const handleQuantityUpButton = () => {
    quantity++;
    cartItemQuantity.textContent = `${quantity}`;
    cartItemTotal.textContent = `Total: $${totalPrice(price, quantity)}`;
    updateCartTotal();
    console.log(`quantity up: ${quantity} @handleQuantityUp`);
  };

  const handleQuantityDownButton = () => {
    if (quantity > 1) {
      quantity--;
      cartItemQuantity.textContent = `${quantity}`;
      cartItemTotal.textContent = `Total: $${totalPrice(price, quantity)}`;
      updateCartTotal();
      console.log(`quantity down: ${quantity} @handleQuantityDown`);
   
    } else {
      quantity = 0;
        cartItem.remove();
        updateCartTotal();

      console.log(`quantity zero @handleQuantityDown`);
    }
  };

  //append
  cartItemQuantityButtons.append(
    cartItemQuantityDown,
    cartItemQuantity,
    cartItemQuantityUp
  );
  cartItemQuantityContainer.append(
    cartItemQuantityLabel,
    cartItemQuantityButtons
  );

  // ----------------------------------------------------------------------------------------------
  // **********************************************************************************************
  // Remove
  // elements
  const cartItemRemove = document.createElement("button");

  // classes
  cartItemRemove.classList.add("cart-item-remove");

  // content
  cartItemRemove.textContent = "x";

  //event listeners
  cartItemRemove.addEventListener("click", (e) => {
    e.stopPropagation();
    handleRemoveButton();
  });

  //button handlers
  const handleRemoveButton = () => {
    console.log("remove @handleRemove");
    updateCartTotal();
    cartItem.remove();
  };

  //append
  cartItemRemoveContainer.appendChild(cartItemRemove);

  // Total
  //elements
  const cartItemTotalLabel = document.createElement("label");
  const cartItemTotal = document.createElement("p");

  //classes
  cartItemTotalLabel.classList.add("cart-item-total-label", "cart-item-label");
  cartItemTotal.classList.add("cart-item-total");

  //content
  cartItemTotalLabel.for = "cart-item-total";
  cartItemTotal.textContent = `Total: $${totalPrice(price, quantity)}`;

  //append
  cartItemTotalContainer.append(cartItemTotalLabel, cartItemTotal);

  // ----------------------------------------------------------------------------------------------
  // **********************************************************************************************

  // Append all containers to text container

  cartItemTextContainer.append(
    cartItemTitleContainer,
    cartItemPrintSizeContainer,
    cartItemQuantityContainer,
    cartItemRemoveContainer,
    cartItemTotalContainer
  );

  cartItem.append(cartItemImageContainer, cartItemTextContainer);

  // Append item to cart
  cart.appendChild(cartItem);


}

