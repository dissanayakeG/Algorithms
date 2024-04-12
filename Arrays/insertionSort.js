
//Reference: https://www.w3schools.com/dsa/dsa_algo_insertionsort.php

//need to consider sorted and unsorted part of the array
//take first element of the array as sorted part, rest of the array is unsorted part
//then take one by one value from the unsorted part
////place it in the correct position in the sorted part
//compare the value with all the values in sorted part
//if it is less, update correct index to insert
//then move all the other values one step right
//then insert the value to updated index

//as we compare last value of sorted part with 1st value of unsorted part, always need to maintain j's value as i-1
//continue until finish both loops

let numbers = [15, 12, 2, 19, 8, 1];
console.log('sortedList-', sort(numbers))

//Using 2 for loops

function sort(numbers) {

    for (let i = 1; i < numbers.length; i++) { //start from 1st, in order to consider 1st value is sorted part of the array

        let insertIndex = i;
        let insertValue = numbers[i]

        //1st iteration
        //[j], [i]  
        //[15], [12, 2, 19, 8, 1] , i is at 12,insertValue is 12

        //now need to take 12 and compare it with all the sorted part of the array
        for (let j = i - 1; j >= insertIndex - 1; j--) {

            if (insertValue < numbers[j]) {
                numbers[j + 1] = numbers[j] //we need to shift all the value to right, until insertValue is less than sorted array values
                insertIndex = j //when we find the correct position to insert the value from unsorted part, we nee to update the insertIndex
            }
        }

        numbers[insertIndex] = insertValue // as we moved greater values to right and found the new insertIndex we can set the value there
    }
    return numbers;
}



//Using for + while loops
function sort2(numbers) {

    for (let i = 1; i < numbers.length; i++) { //start from 1st, in order to consider 1st value is sorted part of the array

        let insertIndex = i;
        let insertValue = numbers[i]

        let j = i - 1;

        while (insertValue < numbers[j] && j >= 0) {
            numbers[j + 1] = numbers[j]
            insertIndex = j
            j--

        }
        numbers[insertIndex] = insertValue
    }
    return numbers;
}