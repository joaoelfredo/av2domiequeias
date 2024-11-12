//Tomei a liberdade e entender a variável "a" como login correto e a variável "u" como usuario, sendo as duas necessárias para conceder o acesso.
const loginCorreto = true;

function verificaAcesso(usuario) {
    if (loginCorreto && usuario.isAdmin) {
        console.log("Acesso permitido ao administrador.");
    } else {
        console.log("Acesso negado.");
    }
}

const usuario = { nome: "João", admin: true };
verAc(usuario);
