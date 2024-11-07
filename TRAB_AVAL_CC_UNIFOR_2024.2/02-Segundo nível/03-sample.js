function calcularFrete(distancia) {
    return distancia * preco;
}

var preco = 150;


const frete = calcularFrete(preco);
console.log(`O valor do frete é: ${frete}`);
