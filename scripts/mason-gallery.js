import { rabbitArray } from "../scripts/rabbits.js";
const masonGallery = document.getElementById("mason-gallery");

function makeMasonItem(lqImage, hqImage, header, content, index) {
  const masonItem = document.createElement("div");
  const masonImageContainer = document.createElement("div");
  const masonImage = document.createElement("img");
  const masonHeader = document.createElement("h3");
  const masonInner = document.createElement("div");

  const masonCloseButton = document.createElement("div");
  masonCloseButton.addEventListener("click", () => {  
    masonItem.classList.remove("mason-item--active");
    masonImage.src = lqImage;
  });
  masonCloseButton.classList.add("mason-close-button");
  masonCloseButton.textContent = "X";
  masonItem.appendChild(masonCloseButton);



  masonImage.src = lqImage;
  masonImage.alt = header;
  masonHeader.textContent = header;
  masonInner.innerHTML = content;

  masonImage.classList.add("mason-image");
  masonHeader.classList.add("mason-header");
  masonInner.classList.add("mason-inner");
  masonImageContainer.classList.add("mason-image-container");


  masonImageContainer.appendChild(masonImage);
  masonInner.appendChild(masonHeader);
  masonItem.appendChild(masonImageContainer);
  masonItem.appendChild(masonInner);

  masonItem.classList.add("mason-item", `mason-item-${index + 1}`);
  masonItem.addEventListener("click", () => {
    
    console.log("click");
    const allMasonItems = [...document.querySelectorAll(".mason-item")]
    allMasonItems.forEach(item => item.classList.remove("mason-item--active"));
    masonItem.classList.add("mason-item--active");
    masonImage.src = hqImage;

    
  });




  return masonItem;
}

function makeMasonGalleryFromArray(array) {
  array.forEach((item, index) => {
    const innerContent = `
    <ul>
    <li><strong>Started: </strong>${item.started}</li>
    <li><strong>Breed: </strong>${item.breed}</li>
    <li><strong>Inspiration: </strong>${item.inspiration}</li>
    <li><strong>Price: </strong>$${item.price}</li>
    <li><strong>Size: </strong>${item.size}</li>
      </ul>
    `;

    const masonItem = makeMasonItem(
      item.lqSrc,
      item.hqSrc,
      item.name,
      innerContent,
      index
    );
    console.log(masonItem.childNodes);
    masonGallery.appendChild(masonItem);
  });
}

makeMasonGalleryFromArray(rabbitArray);
