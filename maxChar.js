let str = 'madusanka bandara dissanayake';

console.log(maxChar(str));

function maxChar() {
    let obj = {};
    let maxCharFreq = 0;
    let maxChar = '';

    for (char of str.trim()) {

        if (char in obj) {
            obj[char]++;
        } else {
            obj[char] = 0;
            obj[char]++;
        }

        if ((obj[char]) > maxCharFreq) {
            maxCharFreq = (obj[char]);
            maxChar = char
        }

    }
    return { [maxChar]: maxCharFreq };
}