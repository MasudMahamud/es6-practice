//normal javascript
function add(first,second) {
    return first + second;
}

const total = add(15,15);
console.log(total);

//apply es6
function addNumber(first,second =0) {
    return first + second;
}

const totalNum = addNumber(15);
console.log(totalNum);