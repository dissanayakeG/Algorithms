let length = 20;

fizzBuzz();

function fizzBuzz() {
    for (let i = 1; i <= length; i++) {

        if (isMultiple(i, 3) && isMultiple(i, 5)) {
            console.log('fizzBuzz');
            continue;
        }

        if (isMultiple(i, 3)) {
            console.log('fizz');
            continue;
        }

        if (isMultiple(i, 5)) {
            console.log('buzz');
            continue;
        }

        console.log(i)
    }
}

function isMultiple(num, multiplier) {
    return num % multiplier === 0;
}