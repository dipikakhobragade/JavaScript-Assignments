

let professor = {
    fullName: ' Bhushan Bhele',
    age: 40,
    dept: 'SAP',
    city: 'Mumbai',
    isMarried: true,
    degrees: {
        engineering:'CSC',
        PHD:'Adv Computing',
        diploma:' E & TC',

    },
    certificates:['Hacker Rank Participation','Certificate in IFE course','Adv Programming']
}
professor.totalExp = '14 Yrs';
console.table(professor);
professor.city = 'Pune';
console.log(professor);
professor.certificates.push('Oracle Certificate');
console.log(professor.certificates);

console.log(professor.certificates[3]);

for (const element of professor.certificates) {
    console.log(element);
    
}

