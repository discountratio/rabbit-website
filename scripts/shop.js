import { rabbits } from "./rabbits/rabbits.js";
const masonGallery = document.getElementById("mason-gallery");

function makeMasonItem(rabbit, index) {
  const masonItem = document.createElement("div");
  masonItem.classList.add("mason-item", `mason-item-${index + 1}`);

  const rabbitCard = document.createElement("div");
  rabbitCard.classList.add("rabbit-card");

  // Create image element
  const masonItemImage = document.createElement("img");
  masonItemImage.src = rabbit.lqSrc;
  masonItemImage.alt = rabbit.name;
  masonItemImage.classList.add("rabbit-card-image");

  //Create header element
  const masonItemHeader = document.createElement("h3");
  masonItemHeader.classList.add("rabbit-card-header");
  masonItemHeader.innerHTML = rabbit.name;

  // Create info element
  const masonItemInfo = document.createElement("div");
  masonItemInfo.classList.add("rabbit-card-info");
  masonItemInfo.innerHTML = `
      <p>${rabbit.breed}</p>
      <p>${rabbit.inspiration}</p>
      <p>${rabbit.price}</p>
      <p>${rabbit.size}</p>
    `;

  masonItem.appendChild(masonItemImage);
  masonItem.appendChild(masonItemHeader);
  masonItem.appendChild(masonItemInfo);

  rabbitCard.addEventListener("click", () => {
    rabbitCard.src = rabbit.hqSrc;
    rabbitCard.classList.toggle("rabbit-card--active");
  });

  return masonItem;
}

function makeMasonGallery() {
  rabbits.forEach((rabbit, index) => {
    masonGallery.appendChild(makeMasonItem(rabbit, index));
  });
  return masonGallery;
}

makeMasonGallery();
