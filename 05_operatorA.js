


function squareOfWordLength(word){

    var lng = word.length;
    return lng*lng;


}
var retunValue = squareOfWordLength('Javascript');
console.log(`square of Javascript length===${retunValue}`);
var retunValue = squareOfWordLength('Google Chrome');
console.log(`Square of GoogleChrome is=== ${retunValue}`);
squareOfWordLength('Developer Smart');

console.log(`========================================================`);


function string (){
    var stringName = 'I am Angular Developer';
     var len = stringName.length;
     var word = stringName.split(' ');
     var wordLen = word.length;
     var result = len/wordLen;
     var mulValue = len*wordLen;
     console.log(`The result value is ${result}`);
     console.log(`Multiplied value is ${mulValue}`);
     console.log(`lenght ${len} and words ${word} nad word length ${word.length}`);
     


    }
string();
