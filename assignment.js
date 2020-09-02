
console.log("\nQ1: Search for a particular character in a string");
let name = "JavaScript";
let searchChar = "r";
console.log(
  `Searching for ${searchChar}... It is present in ${name.indexOf(
    searchChar
  )}th position in the String ${name}`
);

console.log("\nQ2: Program to convert minutes to seconds");
console.log("Converting 120 minutes to seconds = " + 120 * 60 + " seconds");

console.log("\nQ3: Program to search for a element in a array of strings");
let arr = ["This", "is", "an", "array", "of", "Strings"];
console.log(arr);
console.log("Searching for element in 5th index : " + arr[5]);
console.log(`Searching for element "is" using forEach:`);
arr.forEach(function (ele) {
  if (ele == "is") {
    console.log("Element found at index " + arr.indexOf(ele));
  }
});

console.log("\nQ4: Program to display only elements containing 'a' in them from a array");
let array = ["Alphabets", "Numbers", "Characters", "Symbols"];
array.forEach(function (ele) {
  if (ele.search("a") > 0) {
    console.log("a is found in " + ele);
  }
});

console.log("\nQ5: Print an array in reverse order");
let myArr = [1, 2, 3, 4, 5, 6];
// let myArr = ["This", "is", "an", "array", "of", "Strings"];
let v = "";
console.log(myArr);
for (let i = myArr.length - 1; i >= 0; i--) {
  //   console.log(myArr[i]);
  v += myArr[i] + " ";
}
console.log("Reverse -> " + v.trim());