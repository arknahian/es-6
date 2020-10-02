const ages = [12, 23, 45, 12, 34, 12, 4, 5, 12];
const ages2 = [23, 34, 23, 45, 24, 45, 35, 54 , 35 , 35 , 34 , 546 ,34];
const ages3 = [12, 23, 43, 53, 45, 65, 65, 34, 23]
const allAges = ages.concat(ages2).concat(ages3).concat([3]);
const allAges2 = [...ages, ...ages2 , ...ages3 , 5]
// console.log(allAges2);

const minister = 650;
const sochib = 230;
const engineer = 130;
const maxiMum = Math.max(minister, sochib, engineer);
// console.log(maxiMum);

const takaPoysha = [11, 2, 34, 5];
const bigNumber = Math.max(...takaPoysha);
console.log(bigNumber);