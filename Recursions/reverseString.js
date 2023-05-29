const str = 'hello hello'
// console.log('Reversed of' + str, '-->', reverse(str.split("")))

function reverse(str) {
    if (str.length == 0) return "";
    let reversedString = "";

    while (str.length > 0) {
        let lastCharacter = str.pop();
        reversedString += lastCharacter;
    }
    return reversedString;
}

console.log('Reversed of ' + str + ' -->', reverseByRecursion(str));

function reverseByRecursion(str) {
    if (str === "") {
        return "";
    } else {
        return reverseByRecursion(str.substr(1)) + str.charAt(0);
    }
}
