// 3! = 1*2*3;
// 4! = 1*2*3*4;
// 5! = 1*2*3*4*5;
// 10! = 1*2*3*4*5*6*7*8*9*10;

function calcFactorial(n) {
    let factorial = 1;
    for(let i = 1; i <= n; i++) {
        factorial = factorial*i;
        console.log(i,factorial);
    }
}
calcFactorial(5);

// function calcFactorial1(n) {
//     let factorial = 1;
//     for (let i = n; i > 0; i--) {
//         factorial = factorial*i;
//     }    
//     return(factorial);
// }

// console.log(calcFactorial1(10));

