function num(num1 , num2 = 0){
    // if (num2 == undefined) {
    //     num2 = 0;
    // }
    // num2 = num2 || 0;
    return num1 + num2;
}
const total = num(12);
console.log(total); 