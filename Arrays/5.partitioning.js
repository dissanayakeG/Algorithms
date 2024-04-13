
//partition array into two part based on a selected value

//Steps
//select a value from the array as pivot value.
//initialize an incrementVariable as -1
//loop through the array. loop variable is i
//compare array[i] with pivotValue
//if array[i] <=pivotValue
//then incrementVariable++ and swap incrementVariable and i's values


let numbers = [15, 12, 33, 21, 9, 2, 2, 7, 99, 2, 19, 8, 11];

console.log('sortedList-', partition(numbers))

function partition(numbers) {

    let incrementIndex = -1;
    let pivotIndex = numbers.length - 1;
    let pivotValue = numbers[pivotIndex]

    for (let i = 0; i < pivotIndex + 1; i++) {
        if (numbers[i] <= pivotValue) {
            incrementIndex++
            [numbers[incrementIndex], numbers[i]] = [numbers[i], numbers[incrementIndex]]
        }
        [numbers[incrementIndex + 1], numbers[i]] = [numbers[i], numbers[incrementIndex + 1]]

    }
    return numbers
}