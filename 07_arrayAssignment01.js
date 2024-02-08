

const fruits_seasonal = ['Banana','Orange','Apple','Mango','Water Melon'];
const indexOf0 = fruits_seasonal[0]
console.log(`1st element of array == ${indexOf0}`);
const lastElement = fruits_seasonal[fruits_seasonal.length-1];
console.log(`Last Element of array == ${lastElement}`);

fruits_seasonal.unshift('Papaya');
console.log(`Add element before banana ${fruits_seasonal}`);

const removeElement = fruits_seasonal.splice(4,1);
console.log(`Remove element ----- ${removeElement} and array == ${fruits_seasonal}`);

fruits_seasonal.push('Pineapple');
console.log(`Add element at last position --- ${fruits_seasonal}`);

const addElement = fruits_seasonal.splice(4,0,'Dragan Fruit')
console.log(fruits_seasonal);

const replaceElement = fruits_seasonal.splice(2,1,'Kiwi');
console.log(fruits_seasonal);

const elementFrom1to4 = fruits_seasonal.slice(1,5);
console.log(elementFrom1to4);

const last3Element = fruits_seasonal.slice(fruits_seasonal.length-3);
console.log(last3Element);



