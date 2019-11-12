"use struct"


/*

Стили наименование

A-Za-z
0-9
_$


 */



/*
// if([]){
//     console.log(true)
// }
// else{
//     console.log(false)
}
//
// const userValue = prompt();
//
// console.log("typeof userValuse :" , typeof  userValue)
//
//
// const userNumber = Number(NaN);
//
//
// console.log("typeof userValue :" , typeof userNumber);
*/


/*


let x = 666;
console.log(x++); // пофиксная запись
console.log(x);

let c =404;
console.log(c--);
console.log(c);
*/






// const userFirstValue = prompt("Please input your number");
// const userFirstNumber = +userFirstValue;
//
//
//

// if (Number.isNaN(userFirstNumber)){
//     alert("Inavalid value");
// } else {
//
//
//     if(userFirstNumber %2 ===0 ){
//
//     }
//     else {}
//
//
//
//
// }


/*

if(false && true || true || false ){
    console.log(true);
} else {
    console.log(false);
}

*/





/*
const x = 10;
const y = 10;


const sum = x + y;

console.log(x + y);
*/




/*
function circleLength(radius ) {


    return 2* 3.14 * radius;

}






const firstCircleRadius = 1145.54;
const circleRadius2= 234.321;
const circleRadius3= 224.321;
const circleRadius4= 114.321;




console.log(circleLength(firstCircleRadius));
console.log(circleLength(circleRadius2));
console.log(circleLength(circleRadius3));
console.log(circleLength(circleRadius4));*/


const userFirstValue = prompt("Please input first value");
const mark  = prompt("Please input operation")
const userSecondValue = prompt("Please input second value");


let test = null;

switch (mark) {


    case "+": {
        alert(userFirstValue + "+" + userSecondValue + "=" + sum( userFirstValue , userSecondValue))
    }
        break;

    case "x":
    case "X":
    case "*":


    case "-" : {
        alert(userFirstValue + "-" + userSecondValue + "=" + sab( userFirstValue , userSecondValue))
    }
        break;

    case "*" :{
            alert(userFirstValue + "*" + userSecondValue + "=" + multipl( userFirstValue , userSecondValue))
    }
        break;

    case "/" : {
        alert(userFirstNumber + "/" + userSecondNumber + "=" + divis( userFirstNumber , userSecondNumber))

    }
            break;



}


function sum  ( firstNumber , secondNumber) {

    return +firstNumber +  +secondNumber;


}


function sab  ( firstNumber , secondNumber) {

    return firstNumber - secondNumber ;


}
function multipl  ( firstNumber , secondNumber) {

    return firstNumber * secondNumber ;


}
function divis  ( firstNumber , secondNumber) {

    return firstNumber /secondNumber ;


}




