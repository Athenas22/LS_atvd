const n = [1, 2, 3];

const soma = n.reduce((acc, val) => acc + val, 0)

const somaImpares = n
  .filter(val => val % 2 !== 0)
  .reduce((acc, val) => acc + val, 0);

const produto = n.reduce((acc, val) => acc * val, 1);


console.log(soma);
console.log(somaImpares);
console.log(produto);
