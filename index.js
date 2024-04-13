
let numbers = [15, 12, 2, 19, 8, 1];
console.log('sortedList-', shift(numbers))

function shift(numbers) {

    for (let i = 0; i < numbers.length - 1; i++) {
        console.log('outer loop-', numbers)

        let swapped = false;

        for (let j = 0; j < numbers.length - i - 1; j++) {

            if (numbers[j] > numbers[j + 1]) {

                [numbers[j], numbers[j + 1]] = [numbers[j + 1], numbers[j]]

                swapped = true


            }

            sleep(1000)
            console.log(numbers)
        }

        if (!swapped) break

    }
    return numbers

}

function sleep(delay) {
    var start = new Date().getTime();
    while (new Date().getTime() < start + delay);
}
