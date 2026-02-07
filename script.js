function atualizar_mensagem(valor) {
    let status = document.getElementById('status_texto');
    if (valor < 20) status.innerText = 'ALT+F4 no primeiro round.';
    else if (valor < 50) status.innerText = 'Desinstala no primeiro "izi".';
    else if (valor < 80) status.innerText = 'Paciência alta, mas o MATCHMAKING vai cuidar disso';
    else status.innerText = 'Muita paciência... Ideal para ver o time entregando o jogo.';
}

function gerar_resposta() {
    const campo = document.getElementById('resposta_final');
    const btnRes = document.getElementById('btn_resultado');
    const btnReset = document.getElementById('btn_reset');

    const respostas = [
        "❌ NÃO. Vá viver, o sol está lindo lá fora! (eu acho)",
        "⚠️ MELHOR NÃO. Sua parede e seu teclado pediram piedade.",
        "🚫 NEGATIVO. O matchmaking preparou 4 trolls para você.",
        "💀 ERRO FATAL. Você ficará 0/20 e sua mãe vai gritar com seu mic aberto.",
        "☢️ PERIGO. Você vai cair contra um Mono-Reyna smurf que não toma sol há 3 meses.",
        "📉 DERROTA PREVISTA. O jogo vai crashar no 12x12 e você vai tomar ban de 7 dias."
    ];

    let sorteio = Math.floor(Math.random() * respostas.length);

    // Estilização Trágica
    campo.style.display = 'block';
    campo.style.backgroundColor = "#720000";
    campo.style.color = "white";
    campo.innerHTML = `<h2>${respostas[sorteio]}</h2>`;

    // Esconde o botão de gerar e mostra o de reset
    btnRes.style.display = 'none';
    btnReset.style.display = 'block';
}

function resetar_site() {
    location.reload(); // Forma mais otimizada de resetar tudo
}