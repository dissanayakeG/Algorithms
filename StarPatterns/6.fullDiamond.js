
print();

function print() {
    let n = 10;

    for (let i = 0; i <= n; i++) {
        console.log(getLine(n - i, ' '), getLine(i), getLine(i))
    }

    for (let i = 0; i <= n; i++) {
        console.log(getLine(i, ' '), getLine(n - i), getLine(n - i))
    }
}

function getLine(max, char = '*') {
    let line = '';

    for (let j = 0; j <= max; j++) {
        line += char
    }
    return line
}