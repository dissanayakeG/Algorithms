const grid = [
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'W', 'W', 'L', 'W'],
    ['W', 'W', 'L', 'L', 'W'],
    ['L', 'W', 'W', 'L', 'L'],
    ['L', 'L', 'W', 'W', 'W'],
]
// loop through every possible row column combinations(every positions)
console.log('islandCount-->', islandCount(grid))

function islandCount(grid) {
    const visited = new Set();
    let count = 0;

    for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid[0].length; c++) { //retrieves the length (number of columns) of the first row of the grid
            if (explore(grid, r, c, visited) === true) {
                count++
            }
        }
    }
    return count;
}

function explore(grid, r, c, visited) {
    const rowInbounds = 0 <= r && r < grid.length
    const columnInbounds = 0 <= c && c < grid[0].length

    if (!rowInbounds || !columnInbounds) return false
    if (grid[r][c] === 'W') return false //return false when found water

    const pos = r + ',' + c;
    if (visited.has(pos)) return false;
    visited.add(pos);

    explore(grid, r - 1, c, visited); // up
    explore(grid, r + 1, c, visited); // down
    explore(grid, r, c - 1, visited); // left
    explore(grid, r, c + 1, visited); // right

    return true //return true when finish exploring a brand new island
}