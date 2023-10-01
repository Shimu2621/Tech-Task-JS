//Find the largest number from this array [5, 2, 9, 1, 5, 6]

var array = [5, 2, 9, 1, 5, 6];
var largest = 0;

for (let i = 0; i < array.length; i++) {
    if (array[i] > largest) {
        largest = array[i];
    }
}

console.log(largest);