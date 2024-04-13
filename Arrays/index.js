
let array = [3, 5, 1, 8, 9, 4, 9]
// console.log('sorted-', bubbleSort(array));
// console.log('sorted-', insertionSort(array));
console.log('sorted-', selectionSort(array));

function bubbleSort(array) {

    for (let i = 0; i < array.length - 1; i++) {
        let swapped = false
        for (let j = 0; j < array.length - i - 1; j++) {

            if (array[j] > array[j + 1]) {

                [array[j], array[j + 1]] = [array[j + 1], array[j]]

                swapped = true;
            }
        }

        if (!swapped) {
            break
        }
    }
    return array;
}

//[3, 5, 1, 8, 9, 4, 9]
function insertionSort(array) {

    for (let i = 1; i < array.length; i++) { //we start the loop from 1, separating the array onto two halves

        let insertIndex = i;
        let currentValue = array[i];

        for (let j = i - 1; j >= insertIndex - 1; j--) { //loop through the sorted half of the array,  j = i - 1 as i always next to j

            if (currentValue < array[j]) {//we need to find the proper place to new value, and 
                array[j + 1] = array[j] //then shift right side values one place right
                insertIndex = j; //update index of the new values position
            }
        }
        array[insertIndex] = currentValue //insert the new value to appropriate position
    }
    return array

}

//[3, 5, 1, 8, 9, 4, 9]
function selectionSort(array) {

    for (let i = 0; i < array.length - 1; i++) {
        let minIndex = i;

        for (let j = i + 1; j < array.length; j++) {

            if (array[j] < array[minIndex]) {
                minIndex = j
            }
        }
        [array[minIndex], array[i]] = [array[i], array[minIndex]]
    }
    return array;
}

function sleep(delay) {
    var start = new Date().getTime();
    while (new Date().getTime() < start + delay);
}
