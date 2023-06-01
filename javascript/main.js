const cardsSelect = document.querySelectorAll('.gameCard');
const card = document.querySelectorAll('button');
const opcoes = ['papel', 'pedra', 'tesoura'];

for (let i = 0; i < card.length; i++) {
    card[i].addEventListener('click', () => {
        resultado(opcoes[i], maqRandom());
        cloneCard(opcoes[i], 'player');
    })
}

function maqRandom() {
    const escolhaAleatoria = Math.floor(Math.random() * opcoes.length);
    cloneCard(opcoes[escolhaAleatoria], 'maquina');
    return opcoes[escolhaAleatoria];
}

function resultado(player, maquina) {

    if (player === maquina) {
        timer('empate')
        console.log('empate');
        return;
    }
    if (player === 'papel' && maquina === 'tesoura') {
        timer('Maquina')
        placar(0, 1);
        return;
    }
    if (player === 'tesoura' && maquina === 'pedra') {
        timer('Maquina')
        placar(0, 1);
        return;
    }
    if (player === 'pedra' && maquina === 'papel') {
        timer('Maquina')
        placar(0, 1);
        return;
    }
    timer('Você venceu :D')
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

function cloneCard(obj, user) {
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
    cardClone.querySelector('img').src = cardsImg[obj];


    if (user === 'maquina') {
        const cardCloneMaq = document.getElementById('holdCardMaq');
        if (!(cardCloneMaq.hasChildNodes())) {
            cardCloneMaq.appendChild(criarElemento);
        };

        cardCloneMaq.classList.add('gameCardClone');
        cardCloneMaq.querySelector('img').src = cardsImg[obj];
        cardCloneMaq.style.top = '30%';
        return;
    }

    cardClone.style.bottom = '30%';

}

function timer(pontuador) {
    let tempo = 4;
    const timerHolding = document.querySelector('.timerHolding')
    const timerCounter = timerHolding.querySelector('.timer');

    timerHolding.style.visibility = 'visible';

    const vencedor = timerHolding.querySelector('.vencedorDoRound');
    vencedor.innerHTML = 'Vencedor desse Round : <br>';

    vencedor.innerHTML += pontuador;

    const temporizador = setInterval(() => {
        tempo--
        timerCounter.innerHTML = `<p class="animationTimer">${tempo}</p>`;

        if (tempo === 0) {
            tempo = 4;
            clearInterval(temporizador);
            timerHolding.style.visibility = 'hidden';
        }
    }, 2000);


}
