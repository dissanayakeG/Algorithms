//player can move forward and downward only
//grid size is (m,n)
//m->number of rows
//n->number of columns
//when move 1 step down, playable area reduced to (m-1,n) 
//when move 1 step forward, playable area reduced to (m,n-1) 
//base case n==1 || m==1 return 1 as when has only one row or only one column there can be 1 path to destination
//paths = path(m-1,n) + path(m,n-1)

console.log("normal->" + paths(50, 50));

function paths(m, n, memo = {}) {

  const key = m + ',' + n
  if (key in memo) return memo[key]

  if (n == 1 || m == 1) { return 1 }
  if (n == 0 || m == 0) { return 0 }

  memo[key] = paths(m - 1, n, memo) + paths(m, n - 1, memo);

  return memo[key];
}


