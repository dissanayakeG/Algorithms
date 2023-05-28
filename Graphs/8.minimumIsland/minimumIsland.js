const grid = [
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'W', 'W', 'L', 'W'],
    ['W', 'W', 'L', 'L', 'W'],
    ['L', 'W', 'W', 'L', 'L'],
    ['L', 'L', 'W', 'W', 'W'],
]

console.log('MINIMUM ISLAND-->', minimumIsland(grid))

function minimumIsland(grid) {
    const visited = new Set();
    let minimum = Infinity;

    for (let r = 0; r <= grid.length; r++) {
        for (let c = 0; c <= grid[0].length; c++) { //iterative through all raws and columns
            const size = explore(grid, r, c, visited) // pass grid , position and visited
            if (size > 0 && size < minimum) minimum = size //island size should be more than 0
        }
    }
    return minimum;
}

function explore(grid, r, c, visited) {

    const rawInbounds = 0 <= r && r < grid.length;
    const columnInbounds = 0 <= c && c < grid[0].length;

    if (!rawInbounds || !columnInbounds) return 0;
    if (grid[r][c] == 'W') return 0;

    const pos = r + ',' + c;
    if (visited.has(pos)) return 0;
    visited.add(pos)

    //if my neighbor is part of some larger island, then i am too because we're connected right to our neighbors
    //so i'm going to create some size variable, size, it will be 1, because it represent current position
    let size = 1;
    //explore 4 neighbors
    size += explore(grid, r - 1, c, visited); // up
    size += explore(grid, r + 1, c, visited); // down
    size += explore(grid, r, c - 1, visited); // left
    size += explore(grid, r, c + 1, visited); // right

    return size
}
