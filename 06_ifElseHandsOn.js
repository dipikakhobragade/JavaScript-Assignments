

var isNumEvenOrOdd = function(num){

    if (num%2==0) {

        console.log(`${num} is Even No`);
    } else {
        console.log(`${num} is Odd no.`);
    }

}
isNumEvenOrOdd(45);
isNumEvenOrOdd(70);
isNumEvenOrOdd(67);
isNumEvenOrOdd(98);

console.log(`============================`);

var isEligibleForVote = function(age){

    if (age>=18) {
        console.log(`Eligible for Vote`);
        
    } else {
        console.log(`Not eligible for Vote`);
    }

}
isEligibleForVote(18);
isEligibleForVote(17);
isEligibleForVote(20);
isEligibleForVote(40);


console.log(`====================================`);

var string = function(str){
    var ln = str.length;

    if (ln>10) {
        console.log(` ${str} == ${ln}== length is more than 10 char`);
    } else {
        console.log(`not more than 10 char`);
    }

}
string('Javascript-ES6')

console.log(`=================`);

var str2 = function(st){
    var result= st.startsWith('Java')

    if (result='Java') {
        console.log(`yes`);
        
    }

}
str2('Javascript');



