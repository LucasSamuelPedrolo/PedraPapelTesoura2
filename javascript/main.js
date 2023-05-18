function JokenpoGame() {

    //coloca um timer na tela para jogar
    function timerJogada() {
        const timerHold = document.querySelector('.timerHolding');
        const timerSelect = timerHold.querySelector('.timer');
        let timerCount = 1;

        const timerStart = setInterval(() => {
            timerSelect.innerHTML = `<p class=animationTimer>${++timerCount}</p>`;
        }, 2000);

        setTimeout(() => {
            clearInterval(timerStart)
            timerHold.style.visibility = 'hidden';
        }, 6000);

    }

    function inputMaquina() {
        const maquinaOpcoes = ['papel', 'pedra', 'tesoura'];
        return maquinaOpcoes[Math.floor(Math.random() * maquinaOpcoes.length)];
    }

    function centerCardClone(value) {
        
        
    }

    this.start = () => {
        this.retiraTelaStart();
        this.inputCardPlayer();
    },

        this.retiraTelaStart = () => {
            const containerTelaStart = document.querySelector('.container');
            const btnStart = containerTelaStart.querySelector('.play');

            //pequenos efeitos de tela e retirada da tela de 'jogar'
            btnStart.addEventListener('click', () => {
                containerTelaStart.style.animation = 'escureceTela 2s';

                setTimeout(() => {
                    containerTelaStart.style.visibility = 'hidden'
                }, 2000)
            });

        },

        this.inputCardPlayer = () => {
            const escolhasJogador = {
                papelSelect: 'papel', pedraSelect: 'pedra', tesouraSelect: 'tesoura'
            };
            document.addEventListener('click', (e) => {
                const el = e.target;
                if (escolhasJogador[el.id]) {
                    const maquinaChose = inputMaquina();

                    animacaoCards(el.id)
                    console.log('jogadas :', escolhasJogador[el.id], maquinaChose);
                }
            })
        }

}

const jokenpoStart = new JokenpoGame();
jokenpoStart.start();

