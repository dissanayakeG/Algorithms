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

//start with given source node
//if src ==== dst return true,
//else iterate over src's neighbors
//if src ==== dst return true,

const graph = {
  f: ['g', 'i'],
  g: ['h'],
  h: [],
  i: ['g', 'k'],
  j: ['i'],
  k: [],
}

console.log('DFP iterative-->'+ hasPathDFSIterative(graph, 'f', 'k'))
function hasPathDFSIterative(graph, src, dst) {
  const stack = [src];

  if (src === dst) return true

  while (stack.length > 0) {
    let current = stack.pop();
    if (current === dst) return true;

    for (let neighbor of graph[current]) {
      stack.push(neighbor)
      console.log(stack)
    }
  }
  return false
}


console.log('DFP recursive-->', hasPathDFS(graph, 'f', 'k'))
function hasPathDFS(graph, src, dst) {
  if (src === dst) return true;

  for (let neighbor of graph[src]) {
    
    console.log('src-->',src ,'--', graph[src]);

    if (hasPathDFS(graph, neighbor, dst) == true) {
      return true;
    }
  }
  return false
}


console.log('BFP iterative-->', hasPathBFS(graph, 'f', 'k'))
function hasPathBFS(graph, src, dst) {
  const queue = [src];

  while (queue.length > 0) {
    const current = queue.shift();
    if (current === dst) return true;

    for (let neighbor of graph[current]) {
      queue.push(neighbor)
      console.log(queue);
    }
  }
  return false;
}

