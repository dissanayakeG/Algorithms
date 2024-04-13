//Reference: https://www.w3schools.com/dsa/dsa_algo_bubblesort.php

let numbers = [15, 12, 2, 19, 8, 1];
console.log('sortedList-', sort(numbers))
console.log('---------------')
console.log('sortedList-', sortImproved(numbers))

function sort(numbers) {
    for (let i = 0; i < numbers.length - 1; i++) {

        for (let j = 0; j < numbers.length - i - 1; j++) { //j<numbers.length-i-1, is because every time largest element move to the last, so unsorted part get shrinks
            if (numbers[j] > numbers[j + 1]) {

                [numbers[j], numbers[j + 1]] = [numbers[j + 1], numbers[j]];

            }

        }
        sleepFor(2000)

        console.log(numbers);
    }

    return numbers;

}

async function sortImproved(numbers) {

    for (let i = 0; i < numbers.length - 1; i++) {

        let swapped = false

        for (j = 0; j < numbers.length - i - 1; j++) { //j<numbers.length-i-1, is because every time largest element move to the last, so unsorted part get shrinks

            if (numbers[j] > numbers[j + 1]) {

                [[numbers[j], numbers[j + 1]]] = [[numbers[j + 1], numbers[j]]]

                swapped = true

            }

        }

        await sleep(2000)
        console.log(numbers);

        if (!swapped) {
            break
        }

    }
    return numbers;

}

function sleep(delay) {

    return new Promise(resolve => setTimeout(resolve, delay));
}

function sleepFor(sleepDuration) {
    var now = new Date().getTime();
    while (new Date().getTime() < now + sleepDuration) { }
}