
let numbers = [15, 12, 2, 19, 8, 1];
console.log('sortedList-', shift(numbers, 1, 20))

function shift(numbers, index, value) {

    // shift all the values to one position right from the given index
    // insert the given value to given index

    for (let i = numbers.length - 1; i > index - 1; i--) { //i should be i > index-1 as we count array from 0

        numbers[i + 1] = numbers[i]
    }

    numbers[index] = value

    return numbers
}