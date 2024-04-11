let numbers = [1, 2, 3, 4, 5];

//swapping values
let temp = numbers[0]
numbers[0] = numbers[2];
numbers[2] = temp
console.log(numbers);

function looping(numbers) {

    for (let i = 0; i < numbers.length; i++) {
        sleep(1000)

        if (i == 3) {
            continue
        }

        console.log(numbers[i], 'after');
    }

}

function sleep(delay) {
    var start = new Date().getTime();
    while (new Date().getTime() < start + delay);
}