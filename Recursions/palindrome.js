//palindrome means the word is equal to reverse order
const str = 'kayak'
console.log('Reversed of' + str, '-->', isPalindrome(str))

function isPalindrome(str) {
    if (str.length == 0 || str.length == 1) return true

    if (str.charAt(0) === str.charAt(str.length - 1)) {
        return isPalindrome(str.substring(1, str.length - 1))
    }
    return false
}