/*

Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"

*/

console.log(reverseWords("This is an example!"));

function reverseWords(str) {
  let reverseArray = str.split(" ");
  let result = [];
  for(let i = 0 ; i < reverseArray.length ; i++){
      result.push(reverseArray[i].split("").reverse().join(""))
  }
  return result.join(" ")
}