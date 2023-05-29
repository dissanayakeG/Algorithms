const graph = {
    a: ['b', 'c'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: []
}

console.log('nodes-->', printAllNodes(graph, 'a'));

function printAllNodes(graph, src) {
    console.log(src);
    for(let neighbor of graph[src]){
        printAllNodes(graph, neighbor)
    }

}