function sumUpToN(n) {

    if (n == 1) return n;

    return n + sumUpToN(n - 1)
}


// call with 5
// return 5 + sumUpToN(4)
//            4 + sumUpToN(3)
//                3 + sumUpToN(2)
//                    2 + sumUpToN(1)

// 5 + sumUpToN(4 + sumUpToN(3 + sumUpToN(2 + sumUpToN(1))))

console.log('sumUpToN-', sumUpToN(5));