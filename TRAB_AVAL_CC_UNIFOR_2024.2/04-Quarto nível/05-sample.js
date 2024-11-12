async function buscarPersonagem() {
    const id = 1000000000000;
    const resposta = await fetch(`https://swapi.dev/api/people/${id}/`);

    if (!resposta.ok) {
        console.log("Personagem não encontrado.");
        return;
    }

    const personagem = await resposta.json();
    console.log(personagem.name);
}

buscarPersonagem();
