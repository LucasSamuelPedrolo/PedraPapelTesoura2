const cardsSelect = document.querySelectorAll('.gameCard');
const card = document.querySelectorAll('button');
const opcoes = ['papel', 'pedra', 'tesoura'];

for (let i = 0; i < card.length; i++) {
    card[i].addEventListener('click', () => {
        resultado(opcoes[i], maqRandom())
        cloneCard(opcoes[i])
    })
}

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
        placar(0, 1);
        return;
    }
    if (player === 'tesoura' && maquina === 'pedra') {
        placar(0, 1);
        return;
    }
    if (player === 'pedra' && maquina === 'papel') {
        placar(0, 1);
        return;
    }

    placar(1, 0);
}

function placar(player, maquina) {
    const pontuacaoPlayer = document.querySelector('.playerPont')
    const pontuacaoMaquina = document.querySelector('.maquinaPont')
    const ultimoValorMaquina = pontuacaoMaquina.innerText;
    const ultimoValorPlayer = pontuacaoPlayer.innerText;

    if (ultimoValorMaquina >= 4 || ultimoValorPlayer >= 4) {
        const resultadoFinal = ultimoValorPlayer >= 4 ? console.log('player venceu!!') : console.log('maquina venceu!!');
        return;
    }

    if (maquina) {
        pontuacaoMaquina.innerHTML = `${parseInt(ultimoValorMaquina) + 1}`
        return;
    }

    if (player) {
        pontuacaoPlayer.innerHTML = `${parseInt(ultimoValorPlayer) + 1}`
        return;
    }

}

//efeitos ou animações de tela abaixo..

function cloneCard(obj) {
    const cardsImg = {
        papel: 'css/image/papel.jpg',
        pedra: 'css/image/pedraCartoon.jfif',
        tesoura: 'css/image/tesouraCartoon.png'
    };

    const cardClone = document.getElementById('holdCard');
    const criarElemento = document.createElement('img');

    if (!(cardClone.hasChildNodes())) {
        cardClone.appendChild(criarElemento);
    };
    cardClone.classList.add('gameCardClone');
    cardClone.style.bottom = '30%'

    const selectImgCardClone = cardClone.querySelector('img').src = cardsImg[obj];

}
