let grid = [
    ['1', '1', '0', '0'],
    ['1', '1', '0', '0'],
    ['1', '1', '0', '0'],
    ['0', '0', '1', '0'],
];

numIslands(grid);

function numIslands(grid) {
    if (grid.length === 0) return 0;

    let islandCount = 0;

    // Traverse through every cell in the grid
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            console.log('In the main loop--->i,j :',i,j);
            // When we find a '1', it means we found an island
            if (grid[i][j] === '1') {
                islandCount++;
                dfs(grid, i, j); // Perform DFS to mark the entire island as visited
            }
        }
    }

    return islandCount;
}

function dfs(grid, i, j, way = "initial call") {
    // Boundary check: if we go out of bounds, stop recursion
    if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length) {
        console.log('i,j', i,j, way , '| return')
        return;
    }

    console.log('i,j', i,j, way)

    // If the current cell is '0' (water) or already visited, return
    if (grid[i][j] === '0') {
        console.log('i,j', i,j, way, '| return as visited or 0 or border')
        return
    };

    // Mark the current cell as '0' to signify that we've visited it
    grid[i][j] = '0';

    // Explore the neighboring cells in four directions (up, down, left, right)
    // dfs(grid, i + 1, j, 'down   :'); // Down
    // console.log('Fallback from i,j:', i + 1, j, 'down');

    // dfs(grid, i - 1, j, 'up     :'); // Up
    // console.log('Fallback from i,j:', i - 1, j, 'up');

    // dfs(grid, i, j + 1, 'rights :'); // Right
    // console.log('Fallback from i,j:', i, j + 1, 'right');

    // dfs(grid, i, j - 1, 'left   :'); // Left
    // console.log('Fallback from i,j:', i, j - 1, 'left');

    dfs(grid, i + 1, j, 'down   :'); // Down
    console.log('\nFalls back to i,j:', i, j, 'from down\n');
    
    dfs(grid, i - 1, j, 'up     :'); // Up
    console.log('\nFalls back to i,j:', i, j, 'from up\n');
    
    dfs(grid, i, j + 1, 'rights :'); // Right
    console.log('\nFalls back to i,j:', i, j, 'from right\n');
    
    dfs(grid, i, j - 1, 'left   :'); // Left
    console.log('\nFalls back to i,j:', i, j, 'from left\n');
}
