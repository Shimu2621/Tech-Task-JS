//write a program that can sum an array elements. array elements are (2, 5, 7, 8)

let totalArray = [2, 5, 7, 8];

let sum = 0;

for( i = 0; i < totalArray.length; i++) {
    sum += totalArray[i];
}

console.log("The total sum is:", +sum);