const imagePath = "../assets/images/";
const imageType ='.webp'
/*
   This section of code is used to generate the gallery items array.
    It exoports the array to be used in the gallery.js file.
   
    ---------------------------

    The array is made up of objects, each object represents a gallery item,
    and each object has the following properties:
      type: string
      title: string
      subtitle: string
      date: string
      hqSrc: string
      lqSrc: string
      description: string

    A srcset is created from the hqSrc and lqSrc properties, and rendered at 1x and 2x DPR.

     ---------------------------

    There are several helper functions to generate the data:
      randomFromArray : returns a random item from an array
      randomDate : returns a random date between two dates
      randomTitle : returns a random title from an array of titles
      randomSubtitle : returns a random subtitle from an array of subtitles
      randomType : returns a random type from an array of types
      randomDescription : returns a random description that uses title, subtitle, type, and date
      The only property that is not generated randomly is the image.

      ---------------------------
  
    makeGalleryItem : creates a gallery item object and pushes it to the galleryItemArray
    makeItemFromType : creates a number of gallery items of a specific type
    makeAllGalleryItems : creates all gallery items

    ---------------------------

    The galleryItemArray is exported and used in the gallery.js file.
*/
export const galleryItemArray = [];

const names = [
  "Jericho",
  "Sally",
  "Davaniel",
  "Gargantua",
  "Balthazar",
  "Beethoven",
  "Bugs",
  "Larry",
  "Lola",
  "Charlie",
  "Daisy",
  "Daphne",
  "Dorothy",
  "Dottie",
  "Dudley",
  "Dumbo",
  "Edgar",
  "Eleanor",
  "Elsie",
  "Felix",
  "Flopsy",
  "Freckles",
  "Frodo",
  "Gerald",
  "Ginger",
  "Gizmo",
  "Mabel",
  "Benign",
  "Bertie",
  "Mortimer",
  "Percy",
  "Pierre",
  "Ralph",
  "Rufus",
  "Sylvester",
  "Tiberius",
  "Winston",
  "Ziggy",
  "Zelda",
  "Abraham",
];

const subtitles = [
  "french lopper",
  "dutch",
  "dwarf lop",
  "mini lop",
  "lionhead",
  "flemish giant",
  "dutch",
  "french bouncer",
  "northern sniff",
  "armoured under",
  "holland dancer",
  "tuesday moaner",
  "sunday snoozer",
  "wednesday waker",
  "thursday thinker",
  "friday fighter",
  "saturday sleeper",  
];

const types = [
  { name: "rabbit", total: 16 },
  { name: "shoe", total: 5 },
  { name: "portrait", total: 5 },
  { name: "dragon", total: 5 },
  { name: "camera", total: 11 },
];

const randomYearBetween = (start, end) => {
  return Math.floor(Math.random() * (end - start + 1)) + start;
};

const randomFromArray = (array) => {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};

const randomDescription = (type, title, subtitle, date) => {
  const descriptions = [
    `1 - This ${type} called ${title} of ${subtitle} created ${date}.`,
    `2 - This ${type} called ${title} of ${subtitle} created ${date}.`,
    `3 - This ${type} called ${title} of ${subtitle} created ${date}.`,
    `4 - This ${type} called ${title} of ${subtitle} created ${date}.`,
    `5 - This ${type} called ${title} of ${subtitle} created ${date}.`,
    `6 - This ${type} called ${title} of ${subtitle} created ${date}.`,
    `7 - This ${type} called ${title} of ${subtitle} created ${date}.`,
    `8 - This ${type} called ${title} of ${subtitle} created ${date}.`,
  ];
  return randomFromArray(descriptions);
};

function makeItemFromType(type, total) {
  for (let i = 1; i <= total; i++) {
    const randomName = randomFromArray(names);
    const randomSubtitle = randomFromArray(subtitles);
    const randomYear = randomYearBetween(2009, 2022);
    makeGalleryItem(
      type,
      randomName,
      randomSubtitle,
      randomYear,
      `${imagePath}${type}-hq-${i}${imageType}`,
      `${imagePath}${type}-lq-${i}${imageType}`,
      randomDescription(type, randomName, randomSubtitle, randomYear)
    );
    // console.log(`made item${i} of type ${type}`);
  }
}

//pushes gallery item to array
function makeGalleryItem(
  type,
  title,
  subtitle,
  date,
  hqSrc,
  lqSrc,
  description
) {
  const srcset = `${lqSrc} 1x, ${hqSrc} 2x`;
  const item = {
    type,
    title,
    subtitle,
    date,
    hqSrc,
    lqSrc,
    description,
    srcset,
  };

  galleryItemArray.push(item);
  return item;
}

const makeAllGalleryItems = () => {
  types.forEach((type) => {
    makeItemFromType(type.name, type.total);
  });
};

makeAllGalleryItems();

