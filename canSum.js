console.log("canSum->" + canSum(72, [5, 4, 6, 36, 9]));

function canSum(n, arr = []) {

  let status = false;

  if (arr.includes(n)) return true

  for (let i = 0; i <= arr.length - 1; i++) {

    for (let j = 0; j <= arr.length - 1; j++) {

      // console.log(arr[i], '---', arr[j]);

      if (n == (arr[i] + arr[j])) {
        return true
      } else {
        status = false
      }
    }

  }
  return status;
};

console.log("canSum2->" + canSum2(72, [5, 4, 6, 36, 9]));

function canSum2(n, arr=[]) {

  if (n == 0) return true;
  if (n < 0) return false;

  for (let num of arr) {
    const rem = n - num

    if(canSum2(rem, arr) == true){
      return true
    }
  }
  return false;

}


