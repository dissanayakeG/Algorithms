//Reference: https://www.w3schools.com/dsa/dsa_algo_selectionsort.php

//An array with values to sort.
//An inner loop that goes through the array, finds the lowest value, and moves it to the front of the array. This loop must loop through one less value each time it runs.
//An outer loop that controls how many times the inner loop must run. For an array with n values, this outer loop must run n−1 times.

let numbers = [15, 2, 12, 1];
console.log('sortedList-', sort(numbers))
console.log('------------------')
console.log('sortWithMinIndex-', sortWithMinIndex(numbers))

//inside the inner loop, when a smaller value than minVal is found, it swaps minVal with that value, which seems incorrect because minVal should represent the smallest value found so far, not necessarily the value at index i.
//This approach is incorrect because it doesn't properly update the minVal variable and the swapping logic is flawed.

function sort(numbers) {

    for (let i = 0; i < numbers.length - 1; i++) {
        let minVal = numbers[i]; //15

        for (let j = i + 1; j < numbers.length; j++) { //i+1 is for, as we don't need to loop through again via sorted part of the array

            if (numbers[j] < minVal) {

                let temp = minVal;//15
                minVal = numbers[j]//1

                numbers[i] = minVal //0-->1
                numbers[j] = temp //7-->15
            }

        }
        console.log(numbers);
    }

    return numbers;
}

//Correct approach
function sortWithMinIndex(numbers) {

    for (let i = 0; i < numbers.length - 1; i++) {
        let minIndex = i;

        for (let j = i + 1; j < numbers.length; j++) { //i+1 is for, as we don't need to loop through again via sorted part of the array

            if (numbers[j] < numbers[minIndex]) {
                minIndex = j;
            }

        }
        [numbers[i], numbers[minIndex]] = [numbers[minIndex], numbers[i]];
        console.log(numbers);
    }

    return numbers;
}
