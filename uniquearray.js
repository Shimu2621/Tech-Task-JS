//Find the unique elements in an array, remove any duplicates, and classify the unique elements into two arrays: one containing even numbers and the other containing odd numbers.

function removeDuplicatesNumber(numbers) {
    let evenArray = [];
    let oddArray = [];

    const uniqueSet = new Set(numbers)
    const uniqueArray = Array.from(uniqueSet);
    
    for(let i = 0; i < uniqueArray.length; i++) {
        let element = uniqueArray[i];
        if(element % 2 == 0) {
            evenArray.push(element);
        } else {
            oddArray.push(element);
        }

    }
    console.log("Evenarray is:", evenArray);
    console.log("Oddarray is:", oddArray);

   
}
removeDuplicatesNumber([1, 2, 2, 3, 4, 4, 5, 6])


// const inputArray = [1, 2, 2, 3, 4, 4, 5, 6]
// const uniqueArray =removeDuplicatesNumber(inputArray)

// const evenArray = [];
// const oddArray = [];

// if (let i = 0; i < inputArray.length; i++) {
//     evenArray.push(element);
// } else {
//     oddArray.push(element)
// }
        
// console.log('Even Numbers:', evenArray);
// console.log('Odd Numbers:', oddArray);