function reverseString(word) {
  // Write your algorithm here
  //convert string to an array 
  const wordArray = word.split("")
  //reverse the array values
  //const reverseWordValues = wordValues.reverse();
  //convert array to string 
  const reversedWordArray = wordArray.reverse();
  const reversedWord = reversedWordArray.join('');

  return reversedWord;
}


function isPalindrome(word) {
  const reversedWord = reverseString(word);
  if (word === reversedWord) {
    return true;
  } else {
    return false;
  }
}
// if (string == reverseString) {
//   console.log(true);
// }
// else {
//   console.log(false);
// }









//reverseString();
/* 
  Add your pseudocode here


*/

/*
  Add written explanation of your solution here


*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("nun"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("hannah"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("story"));

  console.log("");

}

module.exports = isPalindrome;
