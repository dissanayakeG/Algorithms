const graph = {
  a: ['c', 'b'],
  b: ['d'],
  c: ['e'],
  d: ['f'],
  e: [],
  f: [],
}

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
console.log('DFP iteration-->')
depthFirstPrint(graph, 'a');

function depthFirstPrint(graph, source) {
  const stack = [source]

  while (stack.length > 0) {
    const current = stack.pop();
    console.log(current)
    for (let neighbor of graph[current]) {
      stack.push(neighbor)
    }
  }
}

console.log('DFP recursion-->')
depthFirstPrintRecursion(graph, 'a');

function depthFirstPrintRecursion(graph, source) {
  console.log(source)
  for (let neighbor of graph[source]) {
    depthFirstPrintRecursion(graph, neighbor)
  }
}

console.log('BFP iteration-->')
breadthFirstPrint(graph, 'a');

function breadthFirstPrint(graph, source) {
  const queue = [source]

  while (queue.length > 0) {
    const current = queue.shift();
    console.log(current)
    for (let neighbor of graph[current]) {
      queue.push(neighbor)
    }
  }
}

