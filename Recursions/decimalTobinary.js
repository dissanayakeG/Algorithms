//Method 1
const decimal = 233;
console.log('Binary of ' + decimal, '-->', toBinary(decimal));

function toBinary(decimal) {
  let remainder = decimal % 2;
  let binary = "";

  if (decimal === 0) return 0; // Special case for decimal 0
  if (decimal === 1) return 1; // Special case for decimal 1

  binary = binary.concat(toBinary(Math.floor(decimal / 2)));
  binary += remainder;

  return binary;
}

//Method 2
function toBinary2(number, result = []) {

  if (number == 0) {
    return result;
  }

  result.unshift(number % 2)

  return toBinary2(Math.floor(number / 2), result)
}

console.log('toBinary- ', toBinary2(233));


function backToDecimal(list, originalLength, index, lastElement, result = null) {
  index--
  if (index < 0) {
    return result;
  }

  result = result + Math.pow(2, (originalLength - index - 1)) * lastElement

  return backToDecimal(list.slice(0, -1), originalLength, index, list.splice(-1, 1)[0], result);
}

let inputArray = [1, 1, 1, 0, 1, 0, 0, 1];

console.log('backToDecimal-', backToDecimal(inputArray, inputArray.length, inputArray.length, inputArray.splice(-1, 1)[0]));

// 1 -> 128
// 1 -> 64
// 1 -> 32
// 0 -> 16
// 1 -> 8
// 0 -> 4
// 0 -> 2
// 1 -> 0 

// console.log(1 + 8 + 32+ 64 + 128); //233