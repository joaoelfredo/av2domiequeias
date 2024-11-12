function calcularSalarioFuncionario(horasTrabalhadas, valorHora, cargo) {
    const salarioBase = horasTrabalhadas * valorHora;

    let salarioComBonus;
    const bonusGerente = 1000;
    const bonusSupervisor = 500;
    const bonusRegular = 200;

    if (cargo === "gerente") {
        salarioComBonus = salarioBase + bonusGerente;
    } else if (cargo === "supervisor") {
        salarioComBonus = salarioBase + bonusSupervisor;
    } else {
        salarioComBonus = salarioBase + bonusRegular;
    }

    return salarioComBonus;
}

function calcularSalarioComDesconto(horasTrabalhadas, valorHora, cargo){
    const salarioComBonus = calcularSalarioFuncionario(horasTrabalhadas, valorHora, cargo);
    let salarioFinal;

    if (salarioComBonus > 5000) {
        salarioFinal = salarioComBonus - (salarioComBonus * 0.27);
    } else if (salarioComBonus > 3000) {
        salarioFinal = salarioComBonus - (salarioComBonus * 0.18);
    } else {
        salarioFinal = salarioComBonus - (salarioComBonus * 0.11);
    }

    return salarioFinal;
}

const salario = calcularSalarioComDesconto(160, 25, "gerente");
console.log(`O salário final é: ${salario}`);