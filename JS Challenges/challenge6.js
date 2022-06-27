
const NUM = parseInt(prompt('Enter n: '));
let n1 = 0, n2 = 1, nT;

console.log('Fibonacci Series:');

for (let i = 1; i <= NUM; i++) {
    console.log(n1);
    nT = n1 + n2;
    n1 = n2;
    n2 = nT;
}