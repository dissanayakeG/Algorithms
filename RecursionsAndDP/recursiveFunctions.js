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



function toArabic(str, counter = 0, total = 0) {

    if (str.length == "" || counter == str.length) {
        return total
    }

    //iv = 4 which mean v-i,  ix = 9 which mean x-i
    if (getArabicValue(str.charAt(counter)) < getArabicValue(str.charAt(counter + 1))) {

        total = total + (getArabicValue(str.charAt(counter + 1)) - getArabicValue(str.charAt(counter)))

        counter++ //ignore str.charAt(counter + 1)
    } else {
        total = total + getArabicValue(str.charAt(counter))
    }
    counter++

    return toArabic(str, counter, total)
}

console.log('toArabic-', toArabic('MMMDCCXXIV')); ///1000 + 1000 + 1000 + 500 + 100 + 100 + 10 + 20 + 4
// i ii iii iv v vi vii viii ix x

let map = {
    i: 1,
    v: 5,
    x: 10,
    l: 50,
    c: 100,
    d: 500,
    m: 1000

}

function getArabicValue(val) {
    let value = 0;
    switch (val) {
        case 'I': value = 1; break;
        case 'V': value = 5; break;
        case 'X': value = 10; break;
        case 'L': value = 50; break;
        case 'C': value = 100; break;
        case 'D': value = 500; break;
        case 'M': value = 1000; break;
    }
    return value;
}


function toBinary(number, result = []) {

    if (number == 0) {
        return result;
    }
    result.unshift(number % 2);
    return toBinary(Math.floor(number / 2), result);
}

console.log('toBinary-',toBinary(233));

function lengthOfLastWord(string, incrementCount = 0, charCount = 0) {
    if (string.length == incrementCount) {
        return charCount;
    }

    if (string.charAt(incrementCount) == " ") {
        charCount = 0;
    } else {
        charCount++;
    }
    incrementCount++
    return lengthOfLastWord(string, incrementCount, charCount)
}

let string = "You gotta jump over the wall!"

console.log('lengthOfLastWord-', lengthOfLastWord(string));

function findMultiplications(n, incrementCount = 0, result = []) {

    if (n == incrementCount) {
        return result;
    }

    if (incrementCount > 2 && incrementCount % 3 == 0) {
        result.push('fizz');
    }

    else if (incrementCount > 4 && incrementCount % 5 == 0) {
        result.push("buzz")
    }

    else if (incrementCount > 2 && incrementCount % 3 == 0 && incrementCount % 5 == 0) {
        result.push("fizzBuzz")
    }
    else {
        result.push(incrementCount)
    }
    incrementCount++
    return findMultiplications(n, incrementCount, result);
}

console.log('findMultiplications', findMultiplications(100))

function reverseString(string, reversedString = '', decrementCount) {

    if (decrementCount == 0) {
        return reversedString;
    }
    reversedString = reversedString + "" + string.charAt(decrementCount-1)
    decrementCount--

    console.log(string, reversedString, decrementCount);
    return reverseString(string, reversedString, decrementCount);
}

let str = 'Hello there!';
console.log('reverseString-', reverseString(str, '', str.length))
