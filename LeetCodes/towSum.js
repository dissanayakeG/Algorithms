let input = [0, 1, 2, 3, 7, 15];
let target = 9;

console.log(towSum(input, target));
console.log(towSumR(input, target));
console.log(towSumByMap(input, target));

function towSum(input, target) {

    for (let i = 0; i < input.length; i++) {
        for (let j = 0; j < input.length; j++) {

            if (input[i] + input[j] == target) {
                return [i, j]
            }
        }
    }
    return [];
}

function towSumR(input, target, k = 0) {

    let rem = target - input[k];

    for (let i = k + 1; i < input.length; i++) {

        // if (input[k] + input[i] == target) {
        //     return [k, i]
        // }

        if (input[i] == rem) {
            return [k, i]
        }
    }
    return towSumR(input, target, k + 1);
}

function towSumByMap(input, target) {

    let map = new Map([]);

    for (let i = 0; i < input.length; i++) {
        let rem = target - input[i];
        map.set(rem, i);

        if (input.includes(rem)) {
            return [i, input.indexOf(rem)];
        }
    }
}