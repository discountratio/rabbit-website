import { rabbitArray } from "../scripts/rabbits.js";
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

function makeMasonItem(
  lqImage,
  hqImage,
  header,
  breed,
  price,
  inspiration,
  started,
  size,
  index
) {
  const masonItem = document.createElement("div");
  const masonImage = document.createElement("img");
  const masonHeader = document.createElement("h3");
  const masonBreed = document.createElement("p");
  const masonPrice = document.createElement("p");
  const masonInspiration = document.createElement("p");
  const masonStarted = document.createElement("p");
  const masonSize = document.createElement("p");
  const masonAddToCart = document.createElement("button");

  const masonImageContainer = document.createElement("div");
  masonImageContainer.classList.add("mason-image-container");
  const masonInner = document.createElement("div");
  masonInner.classList.add("mason-inner");

  masonImage.src = lqImage;
  const masonItemLowQualityImage = lqImage;
  const masonItemHighQualityImage = hqImage;
  
  masonImage.srcset = `${lqImage} 400w, ${hqImage} 800w`;
  masonImage.alt = header;
  masonImage.classList.add("mason-image");
  masonHeader.textContent = header;

  masonHeader.classList.add("mason-header");
  masonBreed.innherHTML = `<strong>Breed: </strong>${breed}`;
  masonBreed.classList.add("mason-breed");

  masonPrice.innerHTML = `<strong>Price: </strong>${price}`;
  masonPrice.classList.add("mason-price");
  masonInspiration.innerHTML = `<strong>Inspiration: </strong>${inspiration}`;
  masonInspiration.classList.add("mason-inspiration");
  masonStarted.innerHTML = `<strong>Started: </strong>${started}`;
  masonStarted.classList.add("mason-started");
  masonSize.innerHTML = `<strong>Size: </strong>${size}`;
  masonSize.classList.add("mason-size");
  masonAddToCart.textContent = "Add to Cart";
  masonAddToCart.classList.add("mason-add-to-cart");

  masonAddToCart.addEventListener("click", () => {
    addMasonItemToCart(masonItem);
  });

  masonItem.classList.add("mason-item");
  masonItem.classList.add(`mason-item-${index}`);

  masonInner.appendChild(masonHeader);
  masonInner.appendChild(masonBreed);
  masonInner.appendChild(masonPrice);
  masonInner.appendChild(masonInspiration);
  masonInner.appendChild(masonStarted);
  masonInner.appendChild(masonSize);
  masonInner.appendChild(masonAddToCart);

  masonItem.appendChild(masonInner);
  masonImageContainer.appendChild(masonImage);
  masonItem.appendChild(masonImageContainer);

  const addMasonItemToCart = (masonItem) => {
    const name = masonItem.querySelector(".mason-header").textContent;
    const price = masonItem.querySelector(".mason-price").textContent;
    const size = masonItem.querySelector(".mason-size").textContent;
    const image = masonItem.querySelector(".mason-image").src;

    addToCart(name, price, size, image);
  };

  

  masonItem.addEventListener('click', () => {
    masonItemActive(masonItem);
  })

 
  

  return masonItem;
}

function masonItemActive(masonItem) {
  masonItem.classList.add("mason-item-active");
  // console.log(masonItem.classList);
  console.log(masonItem.masonImageContainer);
  console.log(masonItem.querySelector(".mason-image").src);
  masonItem.querySelector(".mason-image").src = masonItem.hqSrc;
  console.log(masonItem.querySelector(".mason-image").src);

  // console.log(masonItem.img.src);

  console.log(masonItem);

  
}



function makeMasonGalleryFromRabbits(rabbitArray) {
  masonGallery.classList.add("mason-gallery");
  rabbitArray.forEach((rabbit, index) => {
    const masonItem = makeMasonItem(
      rabbit.lqSrc,
      rabbit.hqSrc,
      rabbit.name,
      rabbit.breed,
      rabbit.price,
      rabbit.inspiration,
      rabbit.started,
      rabbit.size,
      index + 1
    );
    masonGallery.appendChild(masonItem);
  });
  return masonGallery;
}

makeMasonGalleryFromRabbits(rabbitArray);
