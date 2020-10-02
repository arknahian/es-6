// function doubleIt(num1){
//     return num1 * 2;
// }
// const result = doubleIt(4);
// console.log(result);



// const add = function (num , num2){
//     return num + num2;
// }
// const result2 = add(1, 2);
// console.log(result2);


// const doubleIt2 = num => num * 2;
// const result = doubleIt2(2);
// console.log(result);

// const add = (num1, num2) => num1 + num2;

// const result2 = add(2, 3);
// console.log(result2);

const doMath = (x, y) => {
    const add = x + y;
    const doubleIt = add * 2;
    const result = doubleIt - add + 2;
    return result;
}
const solve = doMath(4, 5);
console.log(solve);