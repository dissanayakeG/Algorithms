let str = 'madusanka bandara dissanayake';

console.log(maxChar(str));

function maxChar() {
    let obj = {};
    let maxCharFreq = 0;
    let maxChar = '';

    for (char of str.trim()) {

        if (!obj[char]) {
            obj[char] = 1;
        } else {
            obj[char]++;
        }

        if ((obj[char]) > maxCharFreq) {
            maxCharFreq = (obj[char]);
            maxChar = char
        }

    }
    return { [maxChar]: maxCharFreq };
}