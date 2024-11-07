const usuarioObjeto = {
    pessoa: "João",
    idade: 25
};

function exibirIdade(o) {
    console.log(`${o.pessoa  } tem ${  o.idade  } anos.`);
}

exibirIdade(usuarioObjeto);
