function toBinary(number, result = []) {

    if (number == 0) {
        return result;
    }
    result.unshift(number % 2);
    return toBinary(Math.floor(number / 2), result);
}

console.log(toBinary(233));

function lengthOfLastWord(string, incrementCount = 0, charCount = 0) {
    if (string.length == incrementCount) {
        return charCount;
    }

    if (string.charAt(incrementCount) == " ") {
        charCount = 0;
    } else {
        console.log(incrementCount, charCount);

        charCount++;
    }
    incrementCount++
    return lengthOfLastWord(string, incrementCount, charCount)
}

let string = "You gotta jump over the wall!"

console.log('lengthOfLastWord-', lengthOfLastWord(string));