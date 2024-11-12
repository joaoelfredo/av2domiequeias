class Usuario {
    constructor(nome, idade, perfil, dataCadastro, dataUltimoLogin, ativo, tentativasLogin, limiteTentativas) {
        this.nome = nome;
        this.idade = idade;
        this.perfil = perfil;
        this.dataCadastro = dataCadastro;
        this.dataUltimoLogin = dataUltimoLogin;
        this.ativo = ativo;
        this.tentativasLogin = tentativasLogin;
        this.limiteTentativas = limiteTentativas;
    }

    verificarStatus() {
        if (this.ativo) {
            console.log("Ativo");
        } else {
            console.log("Inativo");
        }
    }

    verificarAcesso() {
        if (this.perfil === 'admin') {
            console.log("Admin pode acessar todas as áreas.");
        } else {
            console.log("Convidado tem acesso limitado.");
        }
    }
}

// Função que verifica o número de usuários com a role de "admin"
function contarUsuariosAdmin(usuarios) {
    let contadorAdmins = 0;
    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].perfil === 'admin') {
            contadorAdmins++;
        }
    }
    return contadorAdmins;
}

// Função que verifica se o número de tentativas de login é excessivo
function verificarTentativasLogin(usuario, limiteTentativas) {
    if (usuario.tentativasLogin > limiteTentativas) {
        console.log("Tentativas de login excessivas.");
    } else {
        console.log("Tentativas de login sob controle.");
    }
}

// Função que verifica qual usuário logou mais recentemente
function verificarUltimoLogin(usuario1, usuario2) {
    if (usuario1.dataUltimoLogin > usuario2.dataUltimoLogin) {
        return `${usuario1.nome} logou mais recentemente.`;
    } else {
        return `${usuario2.nome} logou mais recentemente.`;
    }
}

// Função que verifica se o usuário foi criado recentemente (nos últimos 12 meses)
function verificarUsuarioRecente(usuario) {
    const umAnoEmMilissegundos = 31536000000; // 1 ano em milissegundos
    const agora = new Date();
    if (agora - usuario.dataCadastro < umAnoEmMilissegundos) {
        console.log("Usuário criado recentemente.");
    } else {
        console.log("Usuário antigo.");
    }
}

// Dados de exemplo de usuários
let usuarios = [
    new Usuario("Carlos", 25, 'admin', new Date(2023, 1, 15), new Date(2024, 8, 1), true, 100, 2),
    new Usuario("Ana", 30, 'guest', new Date(2020, 4, 22), new Date(2024, 7, 31), true, 50, 3),
    new Usuario("José", 29, 'admin', new Date(2022, 10, 5), new Date(2024, 6, 10), false, 200, 5),
    new Usuario("Maria", 35, 'guest', new Date(2021, 2, 10), new Date(2023, 12, 25), false, 80, 7)
];

console.log("Usuários admin: " + contarUsuariosAdmin(usuarios));

usuarios[0].verificarStatus();
usuarios[1].verificarAcesso();

verificarTentativasLogin(usuarios[2], 4);

console.log(verificarUltimoLogin(usuarios[0], usuarios[3]));

verificarUsuarioRecente(usuarios[3]);
