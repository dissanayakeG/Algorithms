let numOfRows = 5;

fullPyramid(numOfRows);
console.log('\n');

leftHalfPyramid(numOfRows);
console.log('\n');

upSideDownPyramid(numOfRows);
console.log('\n');

function fullPyramid(numOfRows) {

    for (let row = 1; row <= numOfRows; row++) {

        let line = '';

        for (let col = 1; col <= 2 * numOfRows - 1; col++) {

            if (numOfRows !== col && (numOfRows - row >= col || numOfRows + row <= col)) {
                line = line + ' '
            } else {
                line = line + '*'
            }
        }
        console.log(line)
    }
}

function leftHalfPyramid(numOfRows) {

    for (let row = 1; row <= numOfRows; row++) {

        let line = '';

        for (let col = 1; col <= numOfRows; col++) {

            if (row + col <= numOfRows) {
                line = line + ' '
            } else {
                line = line + '*'
            }
        }
        console.log(line)
    }
}

function upSideDownPyramid(numOfRows) {

    for (let row = 1; row <= numOfRows; row++) {

        let line = '';

        for (let col = 1; col <= 2 * numOfRows - 1; col++) {

            if ((col == numOfRows) || (row - col <= 0 && row + col <= 2 * numOfRows)) {
                line = line + '*'
            } else {
                line = line + ' '
            }
        }
        console.log(line)
    }

}
