let numbers = [2, 7, 9, 11, 15];
let target = 9;

function twoSum(numbers, target) {

    let allTheWays = [];

    for (i in numbers) {

        for (j in numbers) {

            if (numbers[i] + numbers[j] == target) {
                allTheWays.push([i, j]);
            }

            if (j <= target) {
                j++
            }

        }
        if (i <= target) {
            i++
        }
    }
    return allTheWays;

}

console.log(twoSum(numbers, target))
console.log('\n=======================\n')
console.log(twoSum2(numbers, target))


function twoSum2(numbers, target) {

    let map = {};

    for (i = 0; i <= numbers.length; i++) {

        //We save the remaining value in the map 
        //so that we may see if the value of the next i appears there; 
        //if so, it indicates that we have located the value needed to add up to the goal value.

        if (numbers[i] in map)
            return [map[numbers[i]], i];

        map[target - numbers[i]] = i;

        console.log(map);
    }

    return [];
}