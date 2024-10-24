//Reference: https://www.w3schools.com/dsa/dsa_algo_quicksort.php
//Tutorial: https://www.youtube.com/watch?v=PgBzjlCcFvc&ab_channel=GeeksforGeeks || https://www.youtube.com/watch?v=pM-6r5xsNEY&ab_channel=QuocDatPhung

let numbers = [15, 12, 33, 21, 9, 2, 2, 7, 99, 2, 19, 8, 11];

console.log('sortedList-', sort(numbers, 0, numbers.length - 1))

function sort(numbers, low, high) {
    if (low < high) {
        let index = partition(numbers, low, high)
        sort(numbers, low, index - 1)
        sort(numbers, index + 1, high)
    }
    return numbers;
}

function partition(numbers, low, high) {
    let pivotValue = numbers[high]; // initially high is numbers.length - 1, last element of the array selected as pivotValue, though we can select any value in the array as pivot
    let incrementIndex = low - 1;   // initially this need to set to -1

    for (let i = low; i < high; i++) {

        if (numbers[i] <= pivotValue) {
            incrementIndex++
            [numbers[i], numbers[incrementIndex]] = [numbers[incrementIndex], numbers[i]]
        }
    }
    [numbers[incrementIndex + 1], numbers[high]] = [numbers[high], numbers[incrementIndex + 1]]; //when i is at pivot position, we need to replace pivot value at correct position
    return incrementIndex + 1
}

function sleep(delay) {
    var start = new Date().getTime();
    while (new Date().getTime() < start + delay);
}
