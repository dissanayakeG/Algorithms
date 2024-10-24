
print();

function print() {
    let n = 10;

    for (let i = 0; i <= n; i++) {
        console.log(getLine(n - i, ' '), getLine(i))
    }
}

function getLine(max, char = '*') {
    let line = ''
    for (let i = 0; i <= max; i++) {
        line += char
    }
    return line
}
