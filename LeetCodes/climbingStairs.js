let steps = 4;

console.log(distinctWays(steps+1));

function distinctWays(steps) {

    if (steps <= 1) {
        return steps;
    }
    return distinctWays(steps - 1) + distinctWays(steps - 2);
}
