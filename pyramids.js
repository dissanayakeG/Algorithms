let number = 5;

printPyramid(number);

function printPyramid(number) {

    for (let i = 1; i <= number; i++) {

        let str = '';

        for (let j = 1; j <= 2 * number - 1; j++) {

            if (number !== j && (number - i >= j || number + i <= j)) {
                str = str + ' '
            } else {
                str = str + '*'
            }

        }
        console.log(str)

    }
}
