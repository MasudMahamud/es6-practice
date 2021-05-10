//type of function
//n js -function
function double(num) {
    return num *2;
}
const total = double(25);
console.log(total);

const doubleIt = function calculate(num) {
    return num *2;
}
const result = doubleIt(45);
console.log(result);

//es6 -function
//single p-m
const doubleItt = num => num *2;
const result2 = doubleItt(65);
console.log(result2);

//double p-m
const add = (x,y) => x+y;
const addResult = add(25,45)
console.log(addResult);

//no p-m
const give5 = () => 5;
const result3 = give5();
console.log(result3);

//many
const doMath = (x,y) => {
    const sum = x + y;
    const diff = x - y;
    const result4 = sum * diff;
    return result4;
}
const result5 = doMath(15,13);
console.log(result5);