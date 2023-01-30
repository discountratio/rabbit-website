import { galleryItemArray } from "./gallery-items.js";
import { addToCart } from "./cart.js";
const masonGallery = document.getElementById("mason-gallery");
// Main purpose is to create and add mason items to the masongallery div in the index.html file.
/* Mason Gallery
  Takes in the array from the gallery-items.js file and creates a mason item for each item in the array.
  The mason item is then appended to the mason-gallery div in the index.html file.
  The mason item is made up of 3 containerss: 
    image container
    button container 
    text container

  There are two functions that are called in this file:
    makeMasonItem
    makeMasonGallery

  makeMasonItem:
    This function takes in the following parameters:
      type : string
      title : string
      subtitle : string
      date : string
      hqSrc : string
      lqSrc : string
      description : string
      
  makeMasonGallery:
      This function takes in the array created in the gallery-items.js file and loops through each item,
      calling the makeMasonItem function for each item in the array. 
      The mason item is then appended to the mason-gallery div in the index.html file.
*/

function makeMasonItem(type, title, subtitle, date, hqSrc, lqSrc, description) {
  //Containers ***********************************************************************************
  // elements
  const masonItem = document.createElement("div"); //item
  const masonItemImageContainer = document.createElement("div"); //image container
  const masonItemButtonContainer = document.createElement("div"); //button container
  const masonItemTextContainer = document.createElement("div"); //text container

  // classes
  masonItem.classList.add("mason-item");
  masonItemImageContainer.classList.add("mason-item-image-container");
  masonItemButtonContainer.classList.add("mason-item-button-container");
  masonItemTextContainer.classList.add("mason-item-text-container");

  // ----------------------------------------------------------------------------------------------

  //Item text cotent********************************************************************************
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

  //append
  masonItemTextContainer.append(
    masonItemType,
    masonItemTitle,
    masonItemSubtitle,
    masonItemDate,
    masonItemImageContainer,
    masonItemDescription
  );
  masonItem.append(masonItemTextContainer);
  //  ----------------------------------------------------------------------------------------------

  //  Mason item image ******************************************************************************
  //elements
  const masonItemImage = document.createElement("img");

  //classes
  masonItemImage.classList.add("mason-item-image");

  //content
  masonItemImage.src = lqSrc;
  masonItemImage.srcset = `${lqSrc} 1x, ${hqSrc} 2x`;
  masonItemImage.alt = `${title}, ${subtitle}`;

  //append
  masonItemImageContainer.append(masonItemImage);
  masonItem.append(masonItemImageContainer);
  //  ----------------------------------------------------------------------------------------------

  //  Mason item buttons ****************************************************************************
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
  masonItemCloseButton.textContent = "X";

  //append
  masonItem.append(masonItemAddToCardButton, masonItemCloseButton);

  //event listenrs
  masonItemAddToCardButton.addEventListener("click", (e) => {
    e.stopPropagation(); //prevents click on parent
    handleAddItemToCart(e);
  });

  masonItemCloseButton.addEventListener("click", (e) => {
    e.stopPropagation(); //prevents click on parent
    handleItemClose();
  });
  //-----------------------------------------------------------------------------------------------

  // button handlers *******************************************************************************
  //Adds item to cart
  const handleAddItemToCart = () => {
    const title = masonItemTitle.textContent;
    const srcset = masonItemImage.srcset;
    addToCart(title, srcset);
    console.log(`${title} added to cart`);
    removeActiveClass();
  };

  //Closes item
  const handleItemClose = () => {
    removeActiveClass();
    console.log(`${title} closed`);
  };
  // ----------------------------------------------------------------------------------------------

  //Helper functions *******************************************************************************
  //Makes item active on click
  masonItem.addEventListener("click", (e) => {
    e.stopPropagation();
    addActiveClass();
  });

  //Removes active class from item
  const removeActiveClass = () => {
    masonItem.classList.remove("mason-item--active");
    console.log(`${title} inactive`);
  };

  //Selects all mason items and removes active class from them, then appendes active class to clicked item
  const addActiveClass = () => {
    const allMasonItems = document.querySelectorAll(".mason-item");
    allMasonItems.forEach((item) => {
      item.classList.remove("mason-item--active");
    });
    masonItem.classList.add("mason-item--active");
    console.log(`${title} active`);
  };

  // Returns mason item *******************************************************************************
  return masonItem;
}

function makeMasonGallery(array) {
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

//Make the gallery
makeMasonGallery(galleryItemArray);
