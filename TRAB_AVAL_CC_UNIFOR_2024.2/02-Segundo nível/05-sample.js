function calcularSalarioFuncionario(horasTrabalhadas, valorHora, cargo) {
    const salarioBase = horasTrabalhadas * valorHora;

    let salarioComBonus;
    if (cargo === "gerente") {
        salarioComBonus = salarioBase + bonusGerente;
    } else if (cargo === "supervisor") {
        salarioComBonus = salarioBase + bonusSupervisor;
    } else {
        salarioComBonus = salarioBase + bonusRegular;
    }


    const bonusGerente = 1000;
    const bonusSupervisor = 500;
    const bonusRegular = 200;

}
    function calcularSalarioComDesconto(horasTrabalhadas, valorHora, cargo){
    const salarioBase = horasTrabalhadas * valorHora;
    let salarioFinal;
    if (salarioComDesconto > 5000) {
        salarioFinal = salarioComDesconto - (salarioComDesconto * 0.27);
    } else if (salarioComDesconto > 3000) {
        salarioFinal = salarioComDesconto - (salarioComDesconto * 0.18);
    } else {
        salarioFinal = salarioComDesconto - (salarioComDesconto * 0.11);
    }

    return salarioFinal;
    }

const salario = calcularSalarioFuncionario(160, 25, "gerente");
console.log(`O salário final é: ${salario}`);
