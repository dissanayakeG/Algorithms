
console.log(isAnagram('nameless', 'salesmen'))


function isAnagram(string1, string2) {
    if (string1.length !== string2.length) return false
    let strMap1 = {}
    let strMap2 = {}

    for (let i = 0; i < string1.length; i++) {
        strMap1[string1[i]] = (strMap1[string1[i]] || 0) + 1
    }

    for (let i = 0; i < string2.length; i++) {
        strMap2[string2[i]] = (strMap2[string2[i]] || 0) + 1
    }

    for (let char in strMap1) {
        if (strMap1[char] !== strMap2[char]) {
            return false;
        }
    }
    return true
}