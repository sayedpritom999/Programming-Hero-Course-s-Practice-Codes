function fibonacci(n) {
    if(n == 1) {
        return [0,1]
    }
    else  {
        // calculate array with nth element
        let fibo = fibonacci(n-1);
        let nextElement = fibo[n-1]+fibo[n-2];
        fibo.push(nextElement);
        return fibo;
    }
}

console.log(fibonacci(2))
// Execution Stack
//  fibonacci(4)
//      fibonacci(4-1) => fibo = [0,1,1, 2], n = 4, nextElement = 3, fibo = [0,1,1,2,3]
//          fibonacci(3-1) => fibo = [0,1,1], n = 3, nextElement = 2, fibo = [0,1,1,2]
//              fibonacci(2-1) => fibo = [0,1], n =2, nextElement = 1, fibo = [0,1,1] 
//                 