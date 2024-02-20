

const arrayNumbers = [20,31,40,25,23,11,29,9,60,2,11];
console.log(`====Step 1 total element=====`);
console.log(`Total element available in array -->${arrayNumbers.length}`);

console.log(`====step 2 first and last element of an array===`);

console.log(`First element --- ${arrayNumbers[0]}`);

console.log(`Last element --- ${arrayNumbers[arrayNumbers.length-1]}`);


console.log(`====step 3 third last element of an array===`);

console.log(`Third Last element --- ${arrayNumbers[arrayNumbers.length-3]}`);

console.log(`=======step 4 all even no.=====`);

for (const index in arrayNumbers) {

    if (arrayNumbers[index]%2==0) {
        console.log(arrayNumbers[index]);
        
    }
    
}
console.log(`=======step 5 all odd no.=====`);
for (const index in arrayNumbers) {

    if (arrayNumbers[index]%2!=0) {
        console.log(arrayNumbers[index]);
        
    }
    
}

console.log(`=======step 6 all even position element and sum.=====`);

let sum = 0;
for (const index in arrayNumbers) {

    if (index%2==0) {
        console.log(arrayNumbers[index]);
        sum = sum+arrayNumbers[index];
    }
        
}
console.log(`sum of all even position element ${sum}`);

console.log(`=======step 7 all odd position element and sum.=====`);

let sum1 = 0;
for (const index in arrayNumbers) {

    if (index%2==1) {
        console.log(arrayNumbers[index]);
        sum1 = sum1+arrayNumbers[index];
    }
        
}
console.log(`sum of all even position element ${sum1}`);

console.log(`=======step 8 sum of all element.=====`);

let sum2 = 0;
for (const index in arrayNumbers) {

        console.log(arrayNumbers[index]);
        sum2 = sum2+arrayNumbers[index];
        
}
console.log(`sum of all element ${sum2}`);

console.log(`=======step 9 multiple of 5.=====`);

for (const index in arrayNumbers) {
    if (arrayNumbers[index]%5==0) {
        console.log(arrayNumbers[index]);
        
    }
    
}

console.log(`===for of loop==`);
for (const element of arrayNumbers) {

    if (element%5==0) {
        console.log(element);
        
    }
    
}

console.log(`=====step 10 115 no available or not =====`);
const availableNo = arrayNumbers.includes(115);
console.log(availableNo);

console.log(`=====step 11 23 no available or not =====`);
const availableNo1 = arrayNumbers.includes(23);
console.log(availableNo1);

console.log(`=====step 12 Insert Numbers =====`);
const insertElement = arrayNumbers.splice(3,0,55,66);
console.log(arrayNumbers);

console.log(`=====step 13 Delete index 4 element =====`);
const deleteElement = arrayNumbers.splice(4)
console.log(arrayNumbers);
console.table(arrayNumbers);


