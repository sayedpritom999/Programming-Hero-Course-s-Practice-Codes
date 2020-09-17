// 5! = 1*2*3*4*5
// 5! = (5-1)!*5
// n! = (n-1)!*n
// n! = n * (n-1)!

// function factorial(n) {
//     if(n == 0) {
//         return 1;
//     } else {
//         return n * factorial(n-1)
//     }
// }


function factorial(n) {
    if (n== 1 || n == 0) {
        return 1
    } else {
        let x = n * factorial(n-1);
        console.log(x);
        return x;
    }
}
let result = factorial(5);
console.log(result)

// Execution Stack
// factorial2(4)
//  4 * factorial(3) => 4 * 6 => 24
//      3 * factorial(2) => 3 * 2 => 6
//          2 * factorial(1) => 2 * 1 => 2