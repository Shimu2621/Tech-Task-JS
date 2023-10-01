//Find the summation from this array element [1, 2, 3, 4, 5]
//create an array
let array = [1, 2, 3, 4, 5];

//create a variable for sum and initialize it
let sum = 0;

//iterate over each item in the array
for (let i = 0; i < array.length; i++) {
    sum += array[i];
}

console.log(sum);