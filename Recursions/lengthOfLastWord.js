function lengthOfLastWord(string, incrementCount = 0, charCount = 0) {
    if (string.length == incrementCount) {
        return charCount;
    }

    if (string.charAt(incrementCount) == " ") {
        charCount = 0;
    } else {
        charCount++;
    }
    incrementCount++
    return lengthOfLastWord(string, incrementCount, charCount)
}

let string = "You gotta jump over the wall!"

console.log('lengthOfLastWord-', lengthOfLastWord(string));