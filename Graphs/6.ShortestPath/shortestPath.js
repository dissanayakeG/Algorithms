//as DFS take all the way to end of the path DFS is not best way to do this
//BFS is better as it explore all the direction very evenly

const edges = [
    ['w', 'x'],
    ['x', 'y'],
    ['z', 'y'],
    ['z', 'v'],
    ['w', 'v']
]

// {
//     w: [ 'x', 'v' ],
//     x: [ 'w', 'y' ],
//     y: [ 'x', 'z' ],
//     z: [ 'y', 'v' ],
//     v: [ 'z', 'w' ]
//  }

//when you are given a array better to create adjacency list from it by building a graph
console.log('shortestPath from w to z-->', shortestPath(edges, 'w', 'z'));

function shortestPath(edges, nodeA, nodeB) {
    const graph = buildGraph(edges);
    const visited = new Set([nodeA]);
    const queue = [[nodeA, 0]] // start queue with node and distance

    while (queue.length > 0) {
        const [node, distance] = queue.shift();

        if (node === nodeB) return distance;
        for (let neighbor of graph[node]) {

            if (!visited.has(visited)) {
                visited.add(neighbor)
                queue.push([neighbor, distance + 1])
            }
        }
    }
    return -1; //whatever you want to return when found no path
}

function buildGraph(edges) {
    let graph = {}
    for (let edge of edges) {
        const [i, j] = edge;

        if (!(i in graph)) graph[i] = [];
        if (!(j in graph)) graph[j] = [];

        graph[i].push(j);
        graph[j].push(i);
    }
    return graph;
}