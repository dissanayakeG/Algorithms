let numbers = [33, 21, 18, 45, 29, 10, 32];

console.log('min value  is-', minValue(numbers))
console.log('min value by recursion is-', minValueR(numbers, numbers[0]))
console.log('max value is-', maxValue(numbers))

function minValue(numbers) {
    let minVal = numbers[0];

    numbers.forEach(element => {
        if (element < minVal) minVal = element
    });

    return minVal;
}

function minValueR(numbers, minValue, counter = 0) {

    if (counter == numbers.length) {
        return minValue;
    }

    if (minValue > numbers[counter]) minValue = numbers[counter]
    counter++
    return minValueR(numbers, minValue, counter)

}


function maxValue(numbers) {
    let maxVal = numbers[0];

    numbers.forEach(element => {
        if (element > maxVal) maxVal = element
    });

    return maxVal;
}