function verificarSePodeDirigir(idade) {
    const idadeMin = 18;
    if (idade >= idadeMin) {
        return "Pode dirigir";
    } else {
        return "Não pode dirigir";
    }
}

const idadeUsuario = 16;

console.log(verificarSePodeDirigir(idadeUsuario));
