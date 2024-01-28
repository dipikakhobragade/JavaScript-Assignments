
function stringHandsOn(){

    var givenString = '   Hey you are doing good,Keep it up   ';
    console.log(`1. Given string is == ${givenString}`);
    
    var totalLength = givenString.length;
    console.log(`2. Total length of string is == ${totalLength}`);

    var trimString = givenString.trim();
    console.log(`3. trim string is == ${trimString}`);
    var totalTrimLength = trimString.length;
    console.log(`3. total trim string length == ${totalTrimLength}`);

    var totalRemoveSpaces = totalLength - totalTrimLength;
    console.log(`4. total remove spaces are === ${totalRemoveSpaces}`);

    var charAtIndex0 = trimString.charAt(0);
    var lastCharAt = trimString.charAt(trimString.length-1);
    console.log(`5. Fist Character ${charAtIndex0} and last character ${lastCharAt}`);

    var wordCount = trimString.split(' ');
    console.log(`6. available word in string ${wordCount} and total of word ${wordCount.length}`);

    var indexOfGood = trimString.indexOf('good');
    console.log(`7. index of good is ${indexOfGood}`);

    var substring = trimString.slice(22);
    console.log(`8. Substring is == ${substring}`);
    var substring1 = trimString.substring(22);
    console.log(`8. Using substring Method == ${substring1}`);

    var isStringEndsWithUp = trimString.endsWith('up');
    console.log(`9. is String ends with UP ${isStringEndsWithUp}`);

    var isStringStartWithHey = trimString.startsWith('Hey');
    console.log(`10. is String start with HEY ${isStringStartWithHey}`);


}
stringHandsOn();
