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
    ['a', 'b', 'c'], //a
    ['d', 'e', 'f'], //db
    ['g', 'h', 'i'] //gec -> hf -> i
];
//i- row | j-col

//STEPS to solve this
//1.we need to loop through the 1st column
//2.we need to loop through the last row (need to ignore 1st column as it covers from 1st loop)

printPositiveDiagonals(matrix);
function printPositiveDiagonals(matrix) {
    let numOfRows = matrix.length
    let numOfCols = matrix[0].length

    //1.we need to loop through the 1st column
    for (let colStart = 0; colStart < numOfRows; colStart++) { //k points each time => k->a, k->d, k->g
        let i = colStart; // as k changes, the row number also change i=row
        let j = 0; // k always in the 1st column
        let diagonal = []

        while (i >= 0) {// when the diagonal reach the 1st row, it is the last row, then negative rows
            diagonal.push(matrix[i][j])
            i = i - 1; //decrement the rows
            j = j + 1; //increment the columns
            //Pls keep in mind this order (i,j)->(row,col), 
            //i struggled at the beginning because i messed this order
        }
        console.log(diagonal)
    }

    //2.we need to loop through the last row (need to ignore 1st column as it covers from 1st loop)
    for (rowStart = 1; rowStart < numOfCols; rowStart++) {//k points each time => k->g, k->h, k->i
        let i = numOfRows - 1; //starting row is always bottom row
        let j = rowStart; //as k changes, column number also change j=col
        let diagonal = [];

        while (j <= numOfCols - 1) { //border is last column
            diagonal.push(matrix[i][j])
            i = i - 1;
            j = j + 1
        }
        console.log(diagonal)
    }
}

console.log('====================')

let matrix2 = [
    ['a', 'b', 'c'], //c
    ['d', 'e', 'f'], //f,b
    ['g', 'h', 'i']  //i,e,a -> hd -> g
];

printNegativeDiagonals(matrix2);

function printNegativeDiagonals(matrix) {
    let numOfRows = matrix.length;
    let numOfCols = matrix[0].length

    for (let colStart = 0; colStart < numOfRows; colStart++) {
        let i = colStart;
        let j = numOfCols - 1 //always diagonals start from last column
        let diagonal = [];

        while (i >= 0 && j >= 0) {
            diagonal.push(matrix[i][j])
            i--
            j--
        }
        console.log(diagonal)
    }

    for (let rowStart = numOfCols - 2; rowStart >= 0; rowStart--) {
        let i = numOfRows - 1; //always diagonals start from last row
        let j = rowStart;
        let row = [];
        while (i >= 0 && j >= 0) { //end from 1st column
            row.push(matrix[i][j])
            i--
            j--
        }
        console.log(row)
    }
}