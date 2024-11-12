function encontraPares(a) {
    const numerosPares = [];
    const divisor =2;
    for (let i = 0; i < a.length; i++) {
        if (a[i] % divisor === 0) {
            numerosPares.push(a[i]);
        }
    }
    return numerosPares;
}

const x = [1, 2, 3, 4, 5, 6];
const y = h(x);
console.log(y);
