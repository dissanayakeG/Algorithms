console.log("memoization and tabulation->"+fibonacciMT(20));
console.log("tabulation->"+fibonacciT(20));
console.log("memoization->"+fibonacciM(20));
console.log("normal->"+fibonacci(20));



//filling array for given n
function fib(n) {
  if (n === 0) {
    return [0];
  }

  let fib = [0, 1];

  for (let i = 2; i <= n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }

  return fib.slice(0, n); //to return only the first n elements, excluding the extra undefined values.
}

//finding sum of previous values upto n, when n is given
function fibonacci(n){
  if(n==0){
    return 0;
  }
  if(n==1){
    return 1;
  }

  return fibonacci(n-1) + fibonacci(n-2)
  //if n=5 --> fibonacci(4)+fibonacci(3)
  //       -->[ fibonacci(3)+fibonacci(2) ] + [ fibonacci(2)+fibonacci(1) ]
  //       -->[ fibonacci(2)+fibonacci(1) ] + [ fibonacci(1)+fibonacci(0) ] + [ fibonacci(1)+fibonacci(0) ] + 1
  //       -->[ fibonacci(1)+fibonacci(0) ] + 1  + [ 1+0 ] + [ 1+0 ] + 1
  //       -->[ 1+0 ] + 1 + [ 1+0 ] + [ 1+0 ] + 1
  //       -->5 //0,1,1,2,3,5<-,8,13,21....
}

//applying memoization
function fibonacciM(n, memo = {}) {
  if (n == 0) {
    return 0;
  }
  if (n == 1) {
    return 1;
  }

  if (memo[n]) {
    return memo[n];
  }

  memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
  return memo[n];
}

//apply tabulation 
function fibonacciT(n) {
  if (n == 0) {
    return 0;
  }
  if (n == 1) {
    return 1;
  }

  const fibTable = [0, 1]; // Initialize the Fibonacci table with base cases

  for (let i = 2; i <= n; i++) {
    fibTable[i] = fibTable[i - 1] + fibTable[i - 2]; // Calculate the Fibonacci number iteratively
  }

  return fibTable[n]; // Return the Fibonacci number at index n
}


//apply both
function fibonacciMT(n, memo = []) {
  if (n == 0) {
    return 0;
  }
  if (n == 1) {
    return 1;
  }

  if (memo[n]) {
    return memo[n];
  }

  const fibTable = [0, 1]; // Initialize the Fibonacci table with base cases

  for (let i = 2; i <= n; i++) {
    fibTable[i] = fibTable[i - 1] + fibTable[i - 2]; // Calculate the Fibonacci number iteratively
  }

  memo[n] = fibTable[n]; // Store the calculated Fibonacci number in memoization table

  return memo[n]; // Return the Fibonacci number at index n
}
