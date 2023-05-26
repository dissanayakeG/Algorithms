//tutorial link-->https://www.youtube.com/watch?v=ngCos392W4w&ab_channel=Reducible

// write a function to sum all non negative numbers upto given n (n >=1)
//base case n==1
//if n==2, 2+1
//if n==3, 3+2+1-->3+sum(2)
//if n==4, 4+3+2+1-->4+sum(3)
//if n==5, 5+4+3+2+1-->5+sum(4)

function sum(n) {
    if (n == 1) {
        return 1;
    } else {
        return n + sum(n - 1)
    }
}

// console.log(sum(5000));

//write a function to get all unique paths of (n,m) grid (n,m>0)
//player can move forward and downward only
//grid size is (m,n)
//m->number of rows
//n->number of columns
//when move 1 step down, playable area reduced to (m-1,n) 
//when move 1 step forward, playable area reduced to (m,n-1) 
//base case n==1 || m==1 return 1 as when has only one row or only one column there can be 1 path to destination
//paths = path(m-1,n) + path(m,n-1)
//if grid is (2,2) --> (1,2) + (2,1)
//if grid is (2,3) --> (1,3) + (2,2)
//if grid is (3,4) --> (3,3) + (2,3)

function paths(n, m) {
    if (n == 1 || m == 1) {
        return 1;
    } else {
        return paths(n, m - 1) + paths(n - 1, m)
    }
}
console.log(paths(3, 4));

console.log(Array.from({ length: 5 }, () => Array(4).fill(0))); // print 2D array
