//DFP
//start with a arbitrary node, push it into stack
//pop the top of stack and print, and mark it as current node
//push all neighbor nodes of  current node into the stack
//repeat until stack is empty

//BFP
//start with a arbitrary node, push it into queue
//shift the front of queue and print, and mark it as current node
//push all neighbor nodes of  current node into the queue from back
//repeat until queue is empty

//travel through all graph elements
//mark visited nodes
//when complete a component return true and count++

const graph = {
  3: [],
  4: [6],
  6: [4, 5, 7, 8],
  8: [6],
  7: [6],
  5: [6],
  1: [2],
  2: [1]
}
console.log('number of connected components-->', connectedComponentCount(graph));
function connectedComponentCount(graph) {
  const visited = new Set();
  let count = 0;

  for (let node in graph) {
    if (explore(graph, node, visited) === true) {
      count++
    }
  }
  return count
}

function explore(graph, src, visited) {
  if (visited.has(String(src))) return false;
  visited.add(String(src))

  for (let neighbor of graph[src]) {
    explore(graph, neighbor, visited)
  }
  console.log(visited)
  return true;
}

