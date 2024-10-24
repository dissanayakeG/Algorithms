
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let size = 2;

arrayChuck(array, size);

function arrayChuck(array, size) {

    let mainArray = [];
    let tempArray = [];

    for (let i = 0; i <= array.length; i++) {

        if (array[i]) {
            tempArray.push(array[i])
        }

        // console.log(i, '===', (i + 1) % size == 0, '===', tempArray);

        if ((i + 1) % size == 0) { // We need to consider (i+1) rather than i itself because array indexing starts with 0.
            mainArray.push(tempArray)
            tempArray = [];
        }
    }

    if (size > array.length) {
        mainArray.push(tempArray)
    }
    console.log(mainArray);
}