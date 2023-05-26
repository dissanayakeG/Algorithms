// console.log("memoization and tabulation->"+pathsMT(20));
// console.log("tabulation->"+pathsT(20));
// console.log("memoization->"+pathsM(20));
console.log("normal->" + paths(50, 50));

function paths(m, n, memo = {}) {

  const key = m + ',' + n
  if (key in memo) return memo[key]

  if (n == 1 || m == 1) { return 1 }
  if (n == 0 || m == 0) { return 0 }

  memo[key] = paths(m - 1, n, memo) + paths(m, n - 1, memo);

  return memo[key];
}


