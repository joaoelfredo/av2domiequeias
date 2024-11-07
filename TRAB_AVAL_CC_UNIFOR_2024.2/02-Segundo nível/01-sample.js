function calcularDesconto(preco) {
    return preco - (preco * desconto);
}
const desconto = 0.15;
var preco = 150;
const precoFinal = calcularDesconto(preco);
console.log(`Preço com desconto: ${precoFinal}`);
