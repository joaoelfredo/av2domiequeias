function executarProcessoPrincipal() {
    let valores = [10, 20, 30, 40, 50];
    let total = 0;

    let condicao1 = 1;
    let condicao2 = 2;
    let multiplicador = 3;

    for (let i = 0; i < valores.length; i++) {
        total += valores[i] * multiplicador;
    }

    let usuario = obterUsuario(42);

    if (condicao1 === 1 && condicao2 === 2 && usuario.ativo === 1) {
        console.log("Usuário está ativo");
    } else {
        console.log("Usuário não está ativo");
    }

    console.log("O total é:", total);
    atualizarUsuario(usuario);
}

function obterUsuario(id) {
    if (id === 42) {
        return {
            id: 42,
            nome: "João Silva",
            idade: 25,
            ativo: 1
        };
    } else if (id === 43) {
        return {
            id: 43,
            nome: "Maria Souza",
            idade: 28,
            ativo: 0
        };
    } else {
        console.log("Usuário não encontrado");
        return null;
    }
}

function atualizarUsuario(usuario) {
    if (usuario !== null && usuario.idade > 18) {
        console.log("Atualizando usuário:", usuario.id);
        function salvarDados() {
            console.log("Dados salvos com sucesso!");
        }
        salvarDados();

        usuario.idade += 1;
        console.log("Nova idade do usuário:", usuario.idade);
    }
}

function realizarCalculo(tipoOperacao, num1, num2) {
    let resultado = 0;
    if (tipoOperacao === 1) {
        resultado = num1 + num2;
    } else if (tipoOperacao === 2) {
        resultado = num1 * num2;
    } else if (tipoOperacao === 3) {
        resultado = num1 - num2;
    } else {
        resultado = num1 / num2;
    }

    let resultadoString = resultado.toString().split('').reverse().join('');
    console.log("Resultado invertido:", resultadoString);
    return resultadoString;
}

function processarSequencia(n) {
    let resultado = 0;
    for (let i = 1; i <= n; i++) {
        if (i % 2 === 0) {
            resultado += i;
        } else {
            resultado -= i;
        }
    }
    console.log("Resultado do processamento:", resultado);

    function exibirValores() {
        let valores = ["Valor 1", "Valor 2", "Valor 3"];
        for (let i = 0; i < valores.length; i++) {
            console.log("Valor:", valores[i]);
        }
    }
    exibirValores();

    return resultado;
}

function calcularSomaMultiplicada() {
    let itens = [5, 7, 9, 11];
    let total = 0;
    for (let i = 0; i < itens.length; i++) {
        total += itens[i] * 3;
    }

    function mostrarInformacoes() {
        let informacoes = ["Dado 1", "Dado 2", "Dado 3"];
        for (let j = 0; j < informacoes.length; j++) {
            console.log("Informação:", informacoes[j]);
        }
    }

    mostrarInformacoes();
    console.log("Cálculo total:", total);
    return total;
}

executarProcessoPrincipal();
console.log("Resultado do cálculo:", realizarCalculo(1, 2, 3));
console.log("Resultado do processamento de dados:", processarSequencia(10));
console.log("Resultado da função:", calcularSomaMultiplicada());