(() => {
    function Jokenpo() {

        this.inicia = () => {
            this.funcionalidades()

        };

        this.funcionalidades = () => {

            document.addEventListener('click', (e) => {
                const elem = e.target;

                let retornoMaquina = this.escolhaMaquina();

                if (elem.classList.contains("btn-folha")) {
                    this.ComparativoValores(1, retornoMaquina);

                    this.MudaImgMaquina(retornoMaquina);

                };

                if (elem.classList.contains("btn-pedra")) {
                    this.ComparativoValores(2, retornoMaquina);

                    this.MudaImgMaquina(retornoMaquina);
                };

                if (elem.classList.contains("btn-tesoura")) {
                    this.ComparativoValores(3, retornoMaquina);

                    this.MudaImgMaquina(retornoMaquina);
                };
            });

        };

        this.escolhaMaquina = () => Math.floor(Math.random() * (3 - 1 + 1) + 1);

        this.MudaImgMaquina = (escolhaMaquina) => {
            const image = document.querySelector('.escolhaMaquina');

            const papelMaquina = 'css/image/papelAmssado.png';
            const pedraMaquina = 'css/image/pedraCartoon.png';
            const tesouraMaquina = 'css/image/tesouraCartoon.png';

            if (escolhaMaquina === 1) {
                image.setAttribute('src', papelMaquina);
            };

            if (escolhaMaquina === 2) {
                image.setAttribute('src', pedraMaquina)
            };

            if (escolhaMaquina === 3) {
                image.setAttribute('src', tesouraMaquina);
            };
        };

        //p = player m = maquina
        let p = 0;
        let m = 0;

        this.escreveHtmlResultado = (pontuador) => {

            const compMaquina = document.querySelector(".compMaquina");

            const compPlayer = document.querySelector('.compPlayer');

            if (p <= 4 && m <= 4) {
                if (pontuador === 'player') {
                    ++p;
                    compPlayer.innerHTML = p;
                };

                if (pontuador === 'maquina') {

                    ++m;
                    compMaquina.innerHTML = m;
                };
                return;
            };

            this.telaFinal(p < m)

            p = 0;
            m = 0;

            compPlayer.innerHTML = p;
            compMaquina.innerHTML = m;

        };

        this.animacaoPonto = (marcou) => {
            const resultadoColor = document.querySelector('.pontuacao');

            resultadoColor.classList.remove('pontuacaoDisplayPontPlayer');

            if (marcou === 'player') {
                resultadoColor.classList.add('pontuacaoDisplayPontPlayer');
            }

            resultadoColor.classList.remove('pontuacaoDisplayPontMaquina');
            if (marcou === 'maquina') {
                resultadoColor.classList.add('pontuacaoDisplayPontMaquina');
            }

            resultadoColor.classList.remove('pontuacaoDisplayPontEmpate');

            if (marcou === 'empate') {
                resultadoColor.classList.add('pontuacaoDisplayPontEmpate');
            }

        };


        this.telaFinal = (pontuadorMax) => {
            //vai receber um valor boleano para validação

            const telaDW = document.querySelector('.resultadoFinal');

            const vencedor = telaDW.querySelector('.result');

            const novoJogoBtn = telaDW.querySelector('.novoJogo');

            if (pontuadorMax) {

                telaDW.classList.add('resultadoFinalVisible');

                vencedor.innerHTML = 'O Vencedor foi a Maquina , mais sorte na proxima :D';

                novoJogoBtn.addEventListener('click', () => {

                    telaDW.classList.remove('resultadoFinalVisible');
                });

            } else {

                telaDW.classList.add('resultadoFinalVisible');

                vencedor.innerHTML = 'Parabens pela vitória!!! :D';

                novoJogoBtn.addEventListener('click', () => {

                    telaDW.classList.remove('resultadoFinalVisible');
                });
            };
        }

        this.ComparativoValores = (player, maquina) => {
            
            if (player === 1 && maquina === 3) {
                this.escreveHtmlResultado('maquina');
                this.animacaoPonto('maquina');
                return;
            };

            if (player === 2 && maquina === 1) {
                this.escreveHtmlResultado('maquina');
                this.animacaoPonto('maquina');
                return;
            };

            if (player === 3 && maquina === 2) {
                this.escreveHtmlResultado('maquina');
                this.animacaoPonto('maquina');
                return;
            };

            if (player === maquina) {
                this.animacaoPonto('empate');
                return;
            };

            if (player) {
                this.escreveHtmlResultado('player');
                this.animacaoPonto('player');
                return;
            }


        };
    };

    const game = new Jokenpo();
    game.inicia();


})();