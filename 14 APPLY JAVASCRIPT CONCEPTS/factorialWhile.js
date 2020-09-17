function calcFactorial(num) {
    let i = 1;
    let factorial = 1;
    while(i <=num) {
        i++;
        factorial = factorial*i;
        console.log(i,factorial);
    }
}

calcFactorial(10);


// function calcFactorial2(n) {
//     let i = n;
//     let factorial = 1;
//     while(i > 0) {
//         factorial = factorial*i;
//         console.log(i,factorial);
//         i--;
//     }
// }

// calcFactorial2(15);