function add(num1 , num2 = 2){
    // if(num2 == undefined){
    //     num2 = 2;                    //it's also works
    // }



    // num2 = num2 || 2;          //it's also works



    const result = num1 + num2;
    return result;
}
const show = add(1);
console.log(show);
