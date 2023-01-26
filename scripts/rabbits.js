const rabbitLowQualityPath = "./assets/rabbits/low-quality/";
const rabbitHighQualityPath = "./assets/rabbits/high-quality/";

const rabbitArray = [];

function makeRabbit(name, started, breed, inspiration, hqSrc, lqSrc, price, size) {
  const rabbit ={
    name,
    started,
    breed,
    inspiration,
    hqSrc,
    lqSrc,
    price,
    size,
  };
  rabbitArray.push(rabbit);
  return rabbit;
}


const rabbit1 = makeRabbit(
  "Jericho",
  "Januaray 2017",
  "Dutch Hopper",
  "a selection of ideas",
  `${rabbitHighQualityPath}painting-1.png`,
  `${rabbitLowQualityPath}painting-1.jpg`,
  "100",
  "8x10"
);

const rabbit2 = makeRabbit(
  "Ruby",
  "Tuesday, March 2nd",
  "Holland Lop",
  "every other Tuesday",
  `${rabbitHighQualityPath}painting-2.png`,
  `${rabbitLowQualityPath}painting-2.jpg`,
  "100",
  "8x10"
);

const rabbit3 = makeRabbit(
  "Brian",
  "s quiet Sunday afternoon",
  "Netherland Dwarf",
  "the original Fast and Furious",
  `${rabbitHighQualityPath}painting-3.png`,
  `${rabbitLowQualityPath}painting-3.jpg`,
  "100",
  "8x10"
);

const rabbit4 = makeRabbit(
  "Zillionaire Cannon",
  "before I should have",
  "Eastern Rabbitbun",
  "Americas Got Talent S04E17",
  `${rabbitHighQualityPath}painting-4.png`,
  `${rabbitLowQualityPath}painting-4.jpg`,
  "100",
  "8x10"
);

const rabbit5 = makeRabbit(
  "Karenaoke",
  "while on the couch",
  "Pygmy Bouncer",
  "traffic circles",
  `${rabbitHighQualityPath}painting-5.png`,
  `${rabbitLowQualityPath}painting-5.jpg`,
  "100",
  "8x10"
);

const rabbit6 = makeRabbit(
  "Jerimander",
  "when I felt like it",
  "Rex Imperius",
  "a lonely walk on the pier",
  `${rabbitHighQualityPath}painting-6.png`,
  `${rabbitLowQualityPath}painting-6.jpg`,
  "100",
  "8x10"
);

const rabbit7 = makeRabbit(
  "Goranthize",
  "After a long sunrise",
  "Tuesday Groaner",
  "mother in laws",
  `${rabbitHighQualityPath}painting-7.png`,
  `${rabbitLowQualityPath}painting-7.jpg`,
  "100",
  "8x10"
);


const rabbit8 = makeRabbit(
  "Bunny",
  "After a long sunrise",
  "Tuesday Groaner",
  "mother in laws",
  `${rabbitHighQualityPath}painting-8.png`,
  `${rabbitLowQualityPath}painting-8.jpg`,
  "100",
  "8x10"
);

const rabbit9 = makeRabbit(
  "Bunny",
  "After a long sunrise",
  "Tuesday Groaner",
  "mother in laws",
  `${rabbitHighQualityPath}painting-9.png`,
  `${rabbitLowQualityPath}painting-9.jpg`,
  "100",
  "8x10"
);

const rabbit10 = makeRabbit(
  "Bunny",
  "After a long sunrise",
  "Tuesday Groaner",
  "mother in laws",
  `${rabbitHighQualityPath}painting-10.png`,

  `${rabbitLowQualityPath}painting-10.jpg`,
  "100",
  "8x10"
);

const rabbit11 = makeRabbit(
  "Bunny",
  "After a long sunrise",
  "Tuesday Groaner",
  "mother in laws",
  `${rabbitHighQualityPath}painting-11.png`,
  `${rabbitLowQualityPath}painting-11.jpg`,
  "100",
  "8x10"
);

const rabbit12 = makeRabbit(
  "Bunny",
  "After a long sunrise",
  "Tuesday Groaner",
  "mother in laws",
  `${rabbitHighQualityPath}painting-12.png`,
  `${rabbitLowQualityPath}painting-12.jpg`,
  "100",
  "8x10"
);

const rabbit13 = makeRabbit(
  "Bunny",
  "After a long sunrise",
  "Tuesday Groaner",
  "mother in laws",
  `${rabbitHighQualityPath}painting-13.png`,
  `${rabbitLowQualityPath}painting-13.jpg`,
  "100",
  "8x10"
);

const rabbit14 = makeRabbit(
  "Bunny",
  "After a long sunrise",
  "Tuesday Groaner",
  "mother in laws",
  `${rabbitHighQualityPath}painting-14.png`,
  `${rabbitLowQualityPath}painting-14.jpg`,
  "100",
  "8x10"
);

const rabbit15 = makeRabbit(
  "Bunny",
  "After a long sunrise",
  "Tuesday Groaner",
  "mother in laws",
  `${rabbitHighQualityPath}painting-15.png`,
  `${rabbitLowQualityPath}painting-15.jpg`,
  "100",
  "8x10"
);

const rabbit16 = makeRabbit(
  "Bunny",
  "After a long sunrise",
  "Tuesday Groaner",
  "mother in laws",
  `${rabbitHighQualityPath}painting-16.png`,
  `${rabbitLowQualityPath}painting-16.jpg`,
  "100",
  "8x10"
);

export {rabbitArray};