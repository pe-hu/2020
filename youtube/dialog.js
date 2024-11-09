'use strict'

document.addEventListener('readystatechange', event => {
    if (event.target.readyState === 'interactive') {
        const programes = document.querySelectorAll('.programes button[value], summary["data-youtube"]');
        const programe = document.querySelector('#programe');
        const close = document.querySelector('#programe button');

        for (const i of programes) {
            i.addEventListener('click', function () {
                programe.showModal();
                player.loadVideoById({ videoId: i.value });
            });
        };

        close.addEventListener('click', function () {
            programe.close();
            player.stopVideo();
        });
    };
}, false);