const imagePath = "../assets/images/";

export const galleryItemArray = [];

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
];

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

const types = [
  { name: "rabbit", total: 16 },
  { name: "shoe", total: 5 },
  { name: "portrait", total: 5 },
  { name: "dragon", total: 5 },
  { name: "camera", total: 11 },
];

function makeItemFromType(type, total) {
  for (let i = 1; i <= total; i++) {
    const randomName = randomFromArray(names);
    const randomSubtitle = randomFromArray(subtitles);
    const randomYear = Math.floor(Math.random() * 10) + 1999;
    makeGalleryItem(
      type,
      randomName,
      randomSubtitle,
      randomYear,
      `${imagePath}${type}-hq-${i}.png`,
      `${imagePath}${type}-lq-${i}.png`,
      randomDescription(type, randomName, randomSubtitle, randomYear)
    );
    // console.log(`made item${i} of type ${type}`);
  }
}

const makeAllItems = () => {
  types.forEach((type) => {
    makeItemFromType(type.name, type.total);
  });
};

makeAllItems();

export default galleryItemArray;

