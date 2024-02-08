
// koi bhi ek criteria satisfy karata hai to eligible for interview


var interviewEligibility = function(gradScore,hscScore,sscScore,candidateName){
if (gradScore>=70 || hscScore>= 80 ||sscScore>90) {
    console.log(`congrates ${candidateName} you are eligible for interview`);
    
} else {
    console.log(`unfortunately you are not eligible for interview`);
    
}

}
interviewEligibility(80,86,90,'Dipika');
interviewEligibility(70,65,55,'Anish');
interviewEligibility(60,79,88,'Ashish');
