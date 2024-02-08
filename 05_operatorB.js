
var greaterNumber = function(num1, num2){

    var greatestNumber = num1>num2 ? `${num1} is greater than ${num2}`: `${num1} is smaller than ${num2}`;
    console.log(greatestNumber);
}
greaterNumber(10,-10);
greaterNumber(800,899);

console.log(`======================================================`);

function isEvenOrOddNum(num){

    var result = num%2 ==0 ? `Given number is even` : `Given num is odd`;
    return result;
}

var returnVal = isEvenOrOddNum(29);
console.log(returnVal);
var returnVal = isEvenOrOddNum(44);
console.log(returnVal);
var returnVal = isEvenOrOddNum(0);
console.log(returnVal);
var returnVal = isEvenOrOddNum(101);
console.log(returnVal);

console.log(`=================================================`);


function wordLength(w){

   
    var wordLg =w.length;
    var result = wordLg%2 ==0 ? `EVEN` : `ODD`;
    return result;


}
var value = wordLength('Javascript');
console.log(value);
var value = wordLength('Developer');
console.log(value);
var value = wordLength('google');
console.log(value);

