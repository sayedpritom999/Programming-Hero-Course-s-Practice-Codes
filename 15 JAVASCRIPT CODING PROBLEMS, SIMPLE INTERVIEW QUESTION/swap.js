let a = 5, b = 7;
// console.log("Before swap: a =", a, "b =", b);
let c = b;
b = a;
a = c;
// console.log("After swap: a =", a, "b =", b);

let x = 5, y = 7;
// console.log("Before swap: x =", x, "y =", y);
x += y;
y = x - y;
x = x - y;
// console.log("After swap: x =", x, "y =", y);

// Last one is JS syntax specific 
let p = 5, q = 7;
[p,q] = [q,p]
console.log("After swap: p =", p, "q =", q);