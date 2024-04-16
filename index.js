
let numbers = [15, 12, 0, 0, 1, 55, 2, 19, 8, 1];
console.log('sortedList-', sort(numbers))

//insertion
function sort(array) {

    for (let i = 1; i < array.length; i++) {

        let insertIndex = i;
        let insertValue = array[insertIndex];

        for (let j = i - 1; j >= insertIndex-1; j--) {

            if (insertValue < array[j]) {

                array[j + 1] = array[j]
                insertIndex = j;

            }

        }
        array[insertIndex] = insertValue
    }
    return array
}


function sleep(delay) {
    var start = new Date().getTime();
    while (new Date().getTime() < start + delay);
}
