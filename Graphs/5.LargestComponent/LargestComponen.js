const graph = {
  0: [8, 1, 5],
  1: [0],
  5: [0, 8],
  8: [0, 5],
  2: [3, 4],
  3: [2, 4],
  4: [3, 2],
}
console.log('largest component-->', largestComponent(graph));

function largestComponent(graph) {

  let visited = new Set();
  let largest = 0;

  for (let node in graph) {
    const size = explore(graph, node, visited)
    if (size > largest) largest = size;
  }
  return largest;
}

function explore(graph, src, visited) {
  if (visited.has(String(src))) {
    console.log(' returning 0 as', src, 'in the', visited)
    console.log('_______________________________________')
    return 0;
  }
  visited.add(String(src))

  let size = 1; //represent current node

  for (let neighbor of graph[src]) {
    console.log('from -->',graph[src], 'recursive call', neighbor, 'size-->', size)
    size += explore(graph, neighbor, visited)
    console.log('size-->', size)
  }
  console.log('------------------')
  return size;
}

//0 is src and add to visited
//8==>visited(0,8)==>size=1==>call [0, 5]
//0==>already visited return 0
//5==>visited(0,8,5)==>size=2==>[0,8]
//0==>already visited return 0
//8==>already visited return 0





