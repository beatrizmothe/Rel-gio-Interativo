function atualizarRelogio() {
        const agora = new Date();

        const horaAtual = agora.getHours();
        const minutoAtual = agora.getMinutes();
        const segundoAtual = agora.getSeconds();

        const anguloPonteiroHora = (horaAtual % 12) * 30 + (minutoAtual / 60) * 30;
        const anguloPonteiroMinuto = minutoAtual * 6 + (segundoAtual / 60) * 6;
        const anguloPonteiroSegundo = segundoAtual * 6;

        document.querySelector('.hora-ponteiro').style.transform = `translate(0, -50%) rotate(${anguloPonteiroHora}deg)`;
        document.querySelector('.minuto-ponteiro').style.transform = `translate(0, -50%) rotate(${anguloPonteiroMinuto}deg)`;
        document.querySelector('.segundo-ponteiro').style.transform = `translate(0, -50%) rotate(${anguloPonteiroSegundo}deg)`;

        const numerosRelogio = document.querySelectorAll('.numero');

        numerosRelogio.forEach(numero => {
            numero.style.color = '';
        });

        numerosRelogio.forEach(numero => {
            const valorNumero = parseInt(numero.textContent);
            const anguloNumero = (valorNumero % 12) * 30;

            if (Math.abs(anguloPonteiroSegundo - anguloNumero) <= 3) {
                numero.style.color = 'red';
            }
        });
    }

setInterval(atualizarRelogio, 1000);

atualizarRelogio();
