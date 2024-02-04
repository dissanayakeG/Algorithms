
function toArabic(str, counter = 0, total = 0) {

    if (str.length == "" || counter == str.length) {
        return total
    }

    //iv = 4 which mean v-i,  ix = 9 which mean x-i
    if (getArabicValue(str.charAt(counter)) < getArabicValue(str.charAt(counter + 1))) {

        total = total + (getArabicValue(str.charAt(counter + 1)) - getArabicValue(str.charAt(counter)))

        counter++ //ignore str.charAt(counter + 1)
    } else {
        total = total + getArabicValue(str.charAt(counter))
    }
    counter++

    return toArabic(str, counter, total)
}

console.log('toArabic-', toArabic('MMMDCCXXIV')); ///1000 + 1000 + 1000 + 500 + 100 + 100 + 10 + 20 + 4
// i ii iii iv v vi vii viii ix x

let map = {
    i: 1,
    v: 5,
    x: 10,
    l: 50,
    c: 100,
    d: 500,
    m: 1000

}

function getArabicValue(val) {
    let value = 0;
    switch (val) {
        case 'I': value = 1; break;
        case 'V': value = 5; break;
        case 'X': value = 10; break;
        case 'L': value = 50; break;
        case 'C': value = 100; break;
        case 'D': value = 500; break;
        case 'M': value = 1000; break;
    }
    return value;
}


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
