function isPrime(n) {
    for(let i = 2; i < n; i++) {
        // console.log(i, (n % i) == 0)
        if(n % i == 0) {
            return 'Not prime number';
        } 
    }
    return 'Prime number';
}

console.log(isPrime(41));