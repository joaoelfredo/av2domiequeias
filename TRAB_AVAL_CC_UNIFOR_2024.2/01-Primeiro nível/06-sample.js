let nomeUsuario = "Pedro";
let idadeUsuario = 25;
let usuarioAtivo = true;

function exibirStatusUsuario(nome, idade, ativo) {
    if (ativo) {
        console.log(`${nome} tem ${idade} anos e está ativo.`);
    } else {
        console.log(`${nome} está inativo.`);
    }
}

exibirStatusUsuario(nomeUsuario, idadeUsuario, usuarioAtivo);
