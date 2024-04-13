
printStarPatterns();

function printStarPatterns() {

    for (let i = 10; i > 0; i--) {
        console.log(getLine(i))
    }
}

function getLine(max) {
    let line = ''
    for (let i = 0; i <= max; i++) {
        line += '*'
    }
    return line
}