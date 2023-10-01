//Reveres the string "Hello, World!"
let Str = "Hello, World!";
function reverseString (str) {
    //use split method to return a new array
    let splitStr = str.split("");
    //reverse method use to return a reversing new array
    let reverseArray = splitStr.reverse();
    //using join method to join all elements of the aaray
    let joinArray = reverseArray.join("");
    return joinArray;
}
console.log(reverseString("Hello, World!"));
 