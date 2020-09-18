// factorial of 4: 4! => 1*2*3*4;

function calcFactorial(n) {
    let i = 1;
    let factorial = 1;
    while(i <=n) {
        factorial *= i;
        console.log(i, factorial);
        i++;
    }
}
calcFactorial(5)


// function calcFactorial(n) {
//     let i = n;
//     let factorial = 1;
//     while(i>=1) {
//         factorial *= i;
//         console.log(i, factorial);
//         i--;
//     }
// }

// calcFactorial(4)