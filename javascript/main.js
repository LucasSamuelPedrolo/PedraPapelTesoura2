const cardsSelect = document.querySelectorAll('.gameCard');
const card = document.querySelectorAll('button');
const opcoes = ['papel', 'pedra', 'tesoura'];

for (let i = 0; i < card.length; i++) {
    card[i].addEventListener('click', () => {
        resultado(opcoes[i], maqRandom() )
    })
};

function maqRandom() {
    const escolhaAleatoria = Math.floor(Math.random() * opcoes.length);
    return opcoes[escolhaAleatoria];
}

function resultado(player, maquina) {
    if (player === maquina) {
        console.log('empate');
        return;
    }
    if (player === 'papel' && maquina === 'tesoura') {
        console.log('player perdeu por jogar papel');
        return;
    }
    if (player === 'tesoura' && maquina === 'pedra') {
        console.log('player perdeu por jogar tesoura');
        return;
    }
    if (player === 'pedra' && maquina === 'papel') {
        console.log('player perder por jogar pedra');
        return;
    }

    console.log('player ganhou!');
}


