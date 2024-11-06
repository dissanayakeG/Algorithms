// function generateBoard(n) {
//     const board = Array.from({ length: n }).map(() => {
//         return Array.from({ length: n }).fill(0)
//     })
//     return board;    
// }

// function printBoard(board) {
//     for (const row of board) {
//         console.log(JSON.stringify(row))
//     }
// }

//Reference : https://www.youtube.com/watch?v=T8ErAYobcbc&ab_channel=VivekanandKhyade-AlgorithmEveryDay

let matrix = [
    ['a', 'b', 'c'],
    ['d', 'e', 'f'],
    ['g', 'h', 'i']
];
//i- row | j-col

//STEPS to solve this
//1.we need to loop through the 1st column
//2.we need to loop through the last row (need to ignore 1st column as it covers from 1st loop)
// printDiagonals(matrix);

function printDiagonals(matrix) {
    let numOfRows = matrix.length
    let numOfCols = matrix[0].length

    //1.we need to loop through the 1st column
    for (let k = 0; k < numOfRows; k++) { //k points each time => k->a, k->d, k->g
        let i = k; // as k changes, the row number also change i=row
        let j = 0; // k always in the 1st column
        let row = []

        while (i >= 0) {// when the diagonal reach the 1st row, it is the last row, then negative rows
            row.push(matrix[i][j])
            i = i - 1; //decrement the rows
            j = j + 1; //increment the columns
            //Pls keep in mind this order (i,j)->(row,col), 
            //i struggled at the beginning because i messed this order
        }
        console.log(row)
    }

    //2.we need to loop through the last row (need to ignore 1st column as it covers from 1st loop)
    for (k = 1; k < numOfCols; k++) {//k points each time => k->g, k->h, k->i
        let i = numOfRows - 1; //starting row is always bottom row
        let j = k; //as k changes, column number also change j=col
        let row = [];

        while (j <= numOfCols - 1) { //border is last column
            row.push(matrix[i][j])
            i = i - 1;
            j = j + 1
        }
        console.log(row)
    }
}

let matrix2 = [
    ['a', 'b', 'c'], //c
    ['d', 'e', 'f'], //f,b
    ['g', 'h', 'i']  //i,e,a
];

printNegativeDiagonals(matrix2);

function printNegativeDiagonals(matrix){
    let numOfRows = matrix.length;
    let numOfCols = matrix[0].length

    for(let k = numOfRows-1; k >= 0; k--){
        let i = k;
        let j = numOfCols-1 //diagonals start from last column
        let row = [];

        while(i>=0){
            row.push(matrix[i][j])
            i--
            j--
        }
        console.log(row)
    }
}