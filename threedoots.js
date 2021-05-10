const ages = [22,24,28,26];
const ages2 = [12,14,16,18,20,21];
const ages3 = [5,6,8,4,3];
const allAges = ages.concat(ages2).concat([5]).concat(ages3);

console.log(allAges);

//es6
const allAges2 = [...ages, ...ages2, 5, ...ages3];
console.log(allAges2);

//normal
const business = 650;
const teacher = 350;
const freelancer = 850;
const maximum = Math.max(business, teacher, freelancer);
console.log(maximum);

//es6
const totalIncome = [650,350,850];
const maximum2 = Math.max(...totalIncome);
console.log(maximum2);