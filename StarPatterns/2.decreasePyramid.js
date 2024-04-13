
print();

function print() {

    for (let i = 10; i > 0; i--) {
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
