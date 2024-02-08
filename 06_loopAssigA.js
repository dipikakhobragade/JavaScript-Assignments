
function totalVowels(string) {
    let char = '';

    for (let index = 0; index < string.length; index++) {
        
         char = char+string.charAt(index)
        
    }
    console.log(char);
    
}
totalVowels('I am Very Good IT Developer')


function totalVowels1(string) {
    let char1 = '';

    for (let index = string.length-1; index >=0; index-- ){
        
         char1 = char1 + string.charAt(index)
        
    }
    console.log(char1);
    
}
totalVowels1('I am Very Good IT Developer')


function totalVowels2(string) {
    let vowel = 0;

    for (let index = 0; index < string.length; index++ ){
        
        let chr = string.charAt(index).toLowerCase();
        if (chr == 'a' || chr == 'e' || chr == 'i'|| chr== 'o' || chr =='u')
        {
            vowel = vowel+1;
        }
       
    }
    console.log(vowel);
   
}
totalVowels2('I am Very Good IT Developer')

console.log('=================================================');


function sumOfCub (){

    let sum = 0;
    for (let index = 1; index <= 5; index++) {
        
        sum = sum + index*index*index;
    }
    console.log(`Sum is ${sum}`);

}

sumOfCub();


function oddPositionedChars(str){


    for (let index = 0; index < str.length; index++) {
        //let char = str.charAt(index);
        // let char= '';
        let ch = str.charAt(index)
        if (index%2==1 && ch != ' ') {
            
            console.log(str.charAt(index));
            //char = char+str.charAt(index);
        }
        //console.log(char);
        
    }

}
oddPositionedChars('Hard Work always pay back');
//oddPositionedChars('Soon I will be UI IT Champ');