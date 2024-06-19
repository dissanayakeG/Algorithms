let number = 5;

printSteps(number);

function printSteps(number) {

    for (let i = 1; i <= number; i++) {
        console.log('"' + getLine(i, '#'), getLine(number - i, ' ') + '"');
    }
}

function getLine(lineSize, char) {
    let line = '';

    for (let i = 1; i <= lineSize; i++) {

        line = line + char
    }

    return line;

}