class Gestor {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}

let gestor = new Gestor("Lucas", 40);
console.log(`Gestor: ${gestor.nome}, Idade: ${gestor.idade}`);
