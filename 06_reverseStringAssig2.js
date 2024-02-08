

function reverseString(string){

    let result = '';
    for (let index = string.length-1; index >= 0; index--) {
        
          let charCount =  string.charAt(index);

          if (charCount != ' ') {

            result = result+string.charAt(index);
            
          }

        
    }
    console.log(result);

}
reverseString('Hard Work always pay back');
reverseString('Soon I will be UI IT Champ')