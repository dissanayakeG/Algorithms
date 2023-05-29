const str = 'hello hello'
console.log('Reversed of' + str, '-->', reverse(str.split("")))

function reverse(str) {
    if (str.length == 0) return "";
    let reversedString = "";

    while (str.length > 0) {
        let lastCharacter = str.pop();
        reversedString += lastCharacter;
    }
    return reversedString;
}