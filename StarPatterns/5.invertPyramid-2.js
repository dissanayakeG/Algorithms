
print();

function print() {
    let n = 10;

    for (let i = 0; i <= n; i++) {
        console.log(getLine(i, ' '), getLine2(n - i))
    }
}

function getLine(max, char = '*') {
    let line = ''
    for (let j = 0; j <= max; j++) {
        line += char
    }
    return line
}

function getLine2(max) {
    let line = ''
    for (let j = 0; j <= max; j++) {
        line += '*'
    }
    return line
}
