

var marriageEligibility = function(gender,age){

    if (age<18 || age==undefined|| isNaN(age) ) {
        console.log(`${age} and ${gender}===> are not eligible for marriage`);
        
    } else {
        if (gender=='Male' && age>=21) {
            console.log(`${age} and ${gender}===> eligible for marriage`);
            
        } else {
            if (gender=='Female' && age>=18) {
                console.log(`${age} and ${gender} ===> eligible for marriage`);
                
            } else {
                
                console.log(`${age} and ${gender} ===> not eligible for marriage`);
            }
        }
        
    }



}
marriageEligibility('Male',17);
marriageEligibility('Male',25);
marriageEligibility('Female',28);
marriageEligibility('Female',16);
marriageEligibility('Other',35);
marriageEligibility('Other',41);
marriageEligibility('Male',null);
marriageEligibility('Female',undefined);
marriageEligibility('Male', NaN);
marriageEligibility('Female',-10);