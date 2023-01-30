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

export function addToCart(title, srcset) {
  // Containers ------------------------------------------------------------------------------------
  // elements
  const cartItem = document.createElement("div");
  const cartItemQuantityContainer = document.createElement("div");
  const cartItemTitleContainer = document.createElement("div");
  const cartItemImageContainer = document.createElement("div");
  const cartItemTotalContainer = document.createElement("div");
  const cartItemPrintSizeContainer = document.createElement("label");
  const cartItemRemoveContainer = document.createElement("button");

  // classes
  cartItem.classList.add("cart-item");
  cartItemQuantityContainer.classList.add(
    "cart-item-quantity-button-container"
  );
  cartItemTitleContainer.classList.add("cart-item-title-container");
  cartItemImageContainer.classList.add("cart-item-image-container");
  cartItemTotalContainer.classList.add("cart-item-total-container");
  cartItemPrintSizeContainer.classList.add("cart-item-print-size-container");
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
  cartItemTitle.textContent = "cart item title";

  // append
  cartItemTitleContainer.appendChild(cartItemTitle);

  // ----------------------------------------------------------------------------------------------
  //Print Size Selector
  // elements
  const printSizeSelector = document.createElement("select");

  // classes
  printSizeSelector.classList.add("print-size-selector");
  cartItemPrintSizeContainer.for = "print-size-selector";

  // content
  cartItemPrintSizeContainer.textContent = "Print size: ";

  // event listeners, update item price and total price
  printSizeSelector.onchange = (e) => {
    console.log(e.target.value);
    console.log(e.target.options[e.target.selectedIndex].price);
    price = e.target.options[e.target.selectedIndex].price;
    cartItemTotal.textContent = `Total: $${totalPrice(price, quantity)}`;
  };

  // Options rendered from array, append options to selector
  printSizeOptions.forEach((option) => {
    const printSizeOption = document.createElement("option");
    printSizeOption.value = option.value;
    printSizeOption.price = option.price;
    printSizeOption.text = `${option.text} - $${option.price}`;
    printSizeSelector.append(printSizeOption);
  });

  //append
  cartItemPrintSizeContainer.appendChild(printSizeSelector);

  // ----------------------------------------------------------------------------------------------
  // Quantity
  // variables
  let quantity = 1;
  let price = printSizeSelector.options[printSizeSelector.selectedIndex].price;

  // elements
  const cardItemQuantityLabel = document.createElement("label");
  const cartItemQuantity = document.createElement("span");
  const cartItemQuantityUp = document.createElement("button");
  const cartItemQuantityDown = document.createElement("button");

  // classes
  cardItemQuantityLabel.classList.add("cart-item-quantity-label");
  cartItemQuantity.classList.add("cart-item-quantity");
  cartItemQuantityUp.classList.add("cart-item-quantity-up");
  cartItemQuantityDown.classList.add("cart-item-quantity-down");

  // content
  cardItemQuantityLabel.textContent = "Quantity: ";
  cardItemQuantityLabel.for = "cart-item-quantity";
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
    console.log(`quantity up: ${quantity} @handleQuantityUp`);
  };

  const handleQuantityDownButton = () => {
    if (quantity > 1) {
      quantity--;
      cartItemQuantity.textContent = `${quantity}`;
      cartItemTotal.textContent = `Total: $${totalPrice(price, quantity)}`;
      console.log(`quantity down: ${quantity} @handleQuantityDown`);
    } else {
      console.log(`quantity zero @handleQuantityDown`);
    }
  };

  //append
  cartItemQuantityContainer.append(
    cardItemQuantityLabel,
    cartItemQuantityDown,
    cartItemQuantity,
    cartItemQuantityUp
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
    cartItem.remove();
  };

  //append
  cartItemRemoveContainer.appendChild(cartItemRemove);

  // Total
  //elements
  const cardItemTotalLabel = document.createElement("label");
  const cartItemTotal = document.createElement("p");

  //classes
  cardItemTotalLabel.classList.add("cart-item-total-label");
  cartItemTotal.classList.add("cart-item-total");

  //content
  cardItemTotalLabel.textContent = "Total: ";
  cardItemTotalLabel.for = "cart-item-total";
  cartItemTotal.textContent = `$${totalPrice(price, quantity)}`;

  //append
  cartItemTotalContainer.append(cardItemTotalLabel, cartItemTotal);

  // ----------------------------------------------------------------------------------------------
  // **********************************************************************************************

  // Append all containers to item
  cartItem.append(
    cartItemImageContainer,
    cartItemTitleContainer,
    cartItemPrintSizeContainer,
    cartItemQuantityContainer,
    cartItemRemoveContainer,
    cartItemTotalContainer
  );

  // Append item to cart
  cart.appendChild(cartItem);
}
