import { galleryItemArray } from "./gallery-items.js";
console.log(galleryItemArray);

const masonGallery = document.getElementById("mason-gallery");
const cart = document.getElementById("cart");

function addToCart(name, price, size, image) {
  const cartItem = document.createElement("div");
  const cartItemName = document.createElement("h3");
  const cartItemPrice = document.createElement("p");
  const cartItemImage = document.createElement("img");
  const cartItemSize = document.createElement("p");
  const cartItemQuantity = document.createElement("p");
  const cartItemQuantityUp = document.createElement("button");
  const cartItemQuantityDown = document.createElement("button");
  const cartItemRemove = document.createElement("button");

  cartItemName.textContent = name;
  cartItemPrice.textContent = price;
  cartItemImage.src = image;
  cartItemSize.textContent = size;
  cartItemQuantity.textContent = 1;
  cartItemQuantityUp.textContent = "+";
  cartItemQuantityDown.textContent = "-";
  cartItemRemove.textContent = "Remove";

  cartItem.classList.add("cart-item");
  cartItemName.classList.add("cart-item-name");
  cartItemPrice.classList.add("cart-item-price");
  cartItemImage.classList.add("cart-item-image");
  cartItemSize.classList.add("cart-item-size");
  cartItemQuantity.classList.add("cart-item-quantity");
  cartItemQuantityUp.classList.add("cart-item-quantity-up");
  cartItemQuantityDown.classList.add("cart-item-quantity-down");
  cartItemRemove.classList.add("cart-item-remove");

  cartItemQuantityUp.addEventListener("click", () => {
    cartItemQuantity.textContent = parseInt(cartItemQuantity.textContent) + 1;
  });

  cartItemQuantityDown.addEventListener("click", () => {
    if (parseInt(cartItemQuantity.textContent) > 1) {
      cartItemQuantity.textContent = parseInt(cartItemQuantity.textContent) - 1;
    }
  });

  cartItemRemove.addEventListener("click", () => {
    cartItem.remove();
  });

  cartItem.appendChild(cartItemName);
  cartItem.appendChild(cartItemPrice);
  cartItem.appendChild(cartItemImage);
  cartItem.appendChild(cartItemSize);

  const cardQuantityButtonDiv = document.createElement("div");
  cardQuantityButtonDiv.classList.add("cart-item-quantity-buttons");
  cardQuantityButtonDiv.appendChild(cartItemQuantityDown);
  cardQuantityButtonDiv.appendChild(cartItemQuantity);
  cardQuantityButtonDiv.appendChild(cartItemQuantityUp);

  cartItem.appendChild(cardQuantityButtonDiv);

  cart.appendChild(cartItem);
}

function makeMasonItem(type, title, subtitle, date, hqSrc, lqSrc, description) {
  //Containers ------------------------------------------------------------------------------------
  // elements
  const masonItem = document.createElement("div"); //container
  const masonItemImageContainer = document.createElement("div"); //image container
  const masonItemButtonContainer = document.createElement("div"); //button container
  // classes
  masonItem.classList.add("mason-item");
  masonItemImageContainer.classList.add("mason-item-image-container");
  masonItemButtonContainer.classList.add("mason-item-button-container");

  // ----------------------------------------------------------------------------------------------

  //Item text cotent ------------------------------------------------------------------------------
  //elements
  const masonItemType = document.createElement("p"); //type
  const masonItemTitle = document.createElement("h3");
  const masonItemSubtitle = document.createElement("h4");
  const masonItemDate = document.createElement("p");
  const masonItemDescription = document.createElement("p");

  // classes
  masonItem.classList.add("mason-item", "mason-hide");
  masonItemType.classList.add("mason-item-type", "mason-hide");
  masonItemTitle.classList.add("mason-item-title", "mason-hide");
  masonItemSubtitle.classList.add("mason-item-subtitle", "mason-hide");
  masonItemDate.classList.add("mason-item-date", "mason-hide");
  masonItemDescription.classList.add("mason-item-description", "mason-hide");
  //text content
  masonItemType.textContent = type;
  masonItemTitle.textContent = title;
  masonItemSubtitle.textContent = subtitle;
  masonItemDate.textContent = date;
  masonItemDescription.textContent = description;
  //attach
  masonItem.append(
    masonItemType,
    masonItemTitle,
    masonItemSubtitle,
    masonItemDate,
    masonItemImageContainer,
    masonItemDescription
  );
  //  ----------------------------------------------------------------------------------------------

  //  Mason item image ------------------------------------------------------------------------------
  //elements
  const masonItemImage = document.createElement("img");
  //classes
  masonItemImage.classList.add("mason-item-image");

  //content
  masonItemImage.src = lqSrc;
  masonItemImage.srcset = `${lqSrc} 1x, ${hqSrc} 2x`;
  masonItemImage.alt = `${title}, ${subtitle}`;

  //attach
  masonItemImageContainer.append(masonItemImage);
  //  ----------------------------------------------------------------------------------------------

  //  Mason item buttons ----------------------------------------------------------------------------
  //elements
  const masonItemAddToCardButton = document.createElement("button");
  const masonItemCloseButton = document.createElement("button");

  //classes
  masonItemAddToCardButton.classList.add(
    "mason-item-add-to-cart-button",
    "mason-button"
  );
  masonItemCloseButton.classList.add("mason-item-close-button", "mason-button");

  //content
  masonItemAddToCardButton.textContent = "Add to Cart";
  masonItemCloseButton.textContent = "Close";

  //attach
  masonItemButtonContainer.append(
    masonItemAddToCardButton,
    masonItemCloseButton
  );

  //event listenrs
  masonItemAddToCardButton.addEventListener("click", () => {
     addToCart(title, price, size, image);
  });

  masonItemCloseButton.addEventListener("click", () => {
    removeActiveClass();
  });

  // ----------------------------------------------------------------------------------------------

  // More stuff
  //Makes item active on click
  masonItem.addEventListener("click", () => {
    addActiveClass();
  });

  const removeActiveClass = () => {
    const active = document.querySelector(".mason-item--active");
    if (active) {
      active.classList.remove("mason-item--active");
    }
  };

  //Selects all mason items and removes active class from them, then attaches active class to clicked item
  const addActiveClass = () => {
    const allMasonItems = document.querySelectorAll(".mason-item");
    allMasonItems.forEach((item) => {
      item.classList.remove("mason-item--active");
    });
    masonItem.classList.add("mason-item--active");
  };

  return masonItem;
}

function addMasonItemsToGalleryFromArray(array) {
  array.forEach((item) => {
    const masonItem = makeMasonItem(
      item.type,
      item.title,
      item.subtitle,
      item.date,
      item.hqSrc,
      item.lqSrc,
      item.description
    );
    masonGallery.appendChild(masonItem);
  });
}

addMasonItemsToGalleryFromArray(galleryItemArray);
