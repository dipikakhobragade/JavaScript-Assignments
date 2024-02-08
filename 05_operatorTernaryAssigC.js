//gender===male and age>=21

function maleMarriageEligibility(gender,age,boyName){

    var marriageEligibility = gender='Male' && age>=21 ? `Hey ${boyName} u r eligible for marriage ` : `${boyName} not eligible for marriage `;
    return marriageEligibility;

}
var returnVal = maleMarriageEligibility('Male', 25, 'Billgates');
console.log(returnVal);
var retunValue = maleMarriageEligibility('Male', 17, 'Stew Jobs');
console.log(retunValue);

console.log(`=========================================================`);


function femaleMarriageEligibility(gender,age,girlName){

    var marriageEligibility = gender='Female' && age>=18 ? `Hey ${girlName} u r eligible for marriage ` : `${girlName} not eligible for marriage `;
    return marriageEligibility;

}
var returnVal = maleMarriageEligibility('Female', 16, 'Ridvika');
console.log(returnVal);
var retunValue = maleMarriageEligibility('Female', 27, 'Dipika');
console.log(retunValue);
