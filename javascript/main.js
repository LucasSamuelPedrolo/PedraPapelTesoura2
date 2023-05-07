(() => {

    //start game
    const iniciar = () => {

        const telaStart = document.querySelector('.container');
        const btnStart = document.querySelector('.play');

        btnStart.addEventListener('click', () => {

            btnStart.classList.add('playClicked');
            telaStart.style.animation = 'escureceTela 2s 1s'

            //esconder a tela de inicio
            setTimeout(() => {
                telaStart.style.visibility = 'hidden';
                btnStart.classList.remove('playClicked');
            }, 3000
            );
        });
    };
    //comando prioritario, nao sobrepor 
    iniciar();

    const detectaClick = () => {
        document.addEventListener('click', (e) => {

            const opcoes = ['pedra', 'papel', 'tesoura'];
            const el = e.target;
            let jogadaMaquina = Math.floor(Math.random() * opcoes.length);

            if (el.classList.contains('papelSelect')) {
                comparativoJogadas('papel', opcoes[jogadaMaquina])
            }
            if (el.classList.contains('pedraSelect')) {
                comparativoJogadas('pedra', opcoes[jogadaMaquina])
            }
            if (el.classList.contains('tesouraSelect')) {
                comparativoJogadas('tesoura', opcoes[jogadaMaquina])
            }
        })
    }

    detectaClick()

    const timerTela = () => {
        let teste;
        const timerHtml = document.querySelector('.timer');
        let num = 1;

        teste = setInterval(() => {

            timerHtml.innerHTML = `<p class = animationTimer> ${++num} </p>`;
        }, 2500);

        setTimeout(() => {
            clearInterval(teste);
            timerHtml.style.visibility = 'hidden';
        }, 7300);
    }

    const comparativoJogadas = (player, maquina) => {
        switch (true) {
            case (player === 'papel' && maquina === 'tesoura'):
                console.log('maquina venceu jogando tesoura');
                break;

            case (player === 'pedra' && maquina === 'papel'):
                console.log('maquina venceu jogando papel');
                break;

            case (player === 'tesoura' && maquina === 'pedra'):
                console.log('maquina Venceu jogando pedra');
                break;

            case (player === maquina):
                console.log('empate');
                break;

            default:
                console.log('player venceu')
                break;
        }
    }

    const jogaCarta = jogada =>{
        
    }

})();