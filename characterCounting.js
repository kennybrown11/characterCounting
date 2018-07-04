function countLetters(string) {
  var str = string.split(" ").join("");
  var letters = {}
    for (let i = 0; i < str.length; i++) {
    if (!letters[str.charAt(i)]){
      letters[str.charAt(i)] = 1;
    } else {
      var increment = 1;
      letters[str.charAt(i)] += increment;
    }
  }
 
  return letters;
 }
 
 console.log(countLetters("lighthouse in the house"));