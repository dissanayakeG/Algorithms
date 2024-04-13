
print();

function print() {
    let n = 10;

    for (let i = 0; i <= n; i++) {
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