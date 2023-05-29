const str = 'KISALKA'
console.log('Reversed of' + str, '-->', reverse(str.split("")))

function reverse(str) {
    if (str.length ==0) return true;
    let reversedString = [];

    let lastCharacter = str.pop()
    reversedString.push(lastCharacter)
    while (str.length > 0) {
        reverse(str.splice(-1))
    }
    return reversedString;
}