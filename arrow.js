// function doubleIt(num){
//     return num * 2;
// }


    // const doubleIt = function(num){
    //    return num * 2;
    // }

    //doubleIt
    const doubleIt = num => num * 2;
const result = doubleIt(4);
console.log(result);


// add
const add = (x, y) => (x + y);
const addResult = add(12, 12);
console.log(addResult);

//multiline arrow function 

const multiline = (x, y) => {
    const addMultiline = x + y;
    const diff = x - y;
    const multilineResult = addMultiline * diff;
    return multilineResult;
}
 const total = multiline(12, 11);
 console.log(total);