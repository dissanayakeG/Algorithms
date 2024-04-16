//Reference: https://www.w3schools.com/dsa/dsa_algo_mergesort.php
//Tutorial: https://www.youtube.com/watch?v=JSceec-wEyw&pp=ygUSbWVyZ2Ugc29ydCBleHBsYWlu

// let numbers = [15, 12, 33, 21, 9, 2, 7, 1, 99];
let numbers = [3, 2, 4, 6, 5, 9, 2];

console.log('sortedList-', sort(numbers))

function sort(array) {

    return divide(array)
}


function divide(array) {

    let firstHalf = [];
    let secondHalf = [];
    let midIndex = Math.floor(array.length / 2);

    if (array.length <= 1) {
        return array;
    }

    for (let i = 0; i < midIndex; i++) {
        firstHalf.push(array[i])
    }
    for (let i = midIndex; i < array.length; i++) {
        secondHalf.push(array[i])
    }
    console.log('dividing-', firstHalf, secondHalf);
    let left = divide(firstHalf)
    let right = divide(secondHalf)

    return merge(left, right);
}

function merge(left, right) {
    console.log('left, right:', left, right);

    let temp = [];
    let i = 0; j = 0;

    while (i < left.length && j < right.length) {

        if (left[i] < right[j]) {
            temp.push(left[i])
            i++
        } else {
            temp.push(right[j])
            j++
        }
    }
    temp = temp.concat(left.slice(i))
    temp = temp.concat(right.slice(j))

    console.log('temp', temp, '\n')
    return temp;
}