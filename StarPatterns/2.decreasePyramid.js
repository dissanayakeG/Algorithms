
print();

function print() {
    let n = 10;

    for (let i = n; i > 0; i--) {
        console.log(getLine(i))
    }
}

function getLine(max) {
    let line = ''
    for (let i = max; i > 0; i--) {
        line += '*'
    }
    return line
}
