// n = [n-1] + [n-2]

// function fibonacci(n) {
//     let fibo = [0,1];
//     if(n == 0) {
//         return 0
//     } 
//     if(n == 1) {
//         return 1
//     }
//     else {
//         return fibonacci(n-1) + fibonacci(n-2);
//     }
// }


// console.log(fibonacci(12))
function fibonacci (n) {
    if(n == 0) {
        return 0
    }
    if(n == 1) {
        return 1
    } 
    else {
        return fibonacci(n-1) + fibonacci(n-2);
    }
}

console.log(fibonacci(12));