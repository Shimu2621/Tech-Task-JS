//Create a programme that calculates the total number of hours from a given number of days. Use data type number.

function calculateTotalHours(days) {
    const hoursPerDay = 24;
    const totalHours = days * hoursPerDay;
    return totalHours;
}
 const numberOfDays = 10;
 const totalHours = calculateTotalHours(numberOfDays);

 console.log(totalHours);