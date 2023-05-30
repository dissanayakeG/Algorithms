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
