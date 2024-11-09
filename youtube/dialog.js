'use strict'

var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player,
    videoId;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        videoId: videoId,
        playerVars: {
            'playsinline': 1,
            'rel': 0
        }
    });
};

document.addEventListener('readystatechange', event => {
    if (event.target.readyState === 'interactive') {
        const programes = document.querySelectorAll('.programes button[value]')
        const programe = document.querySelector('#programe')
        const close = document.querySelector('#programe button')

        for (const i of programes) {
            i.addEventListener('click', function () {
                programe.showModal();
                player.loadVideoById({ videoId: i.value });
            })
        }

        close.addEventListener('click', function () {
            programe.close();
            player.stopVideo();
        })
    }
}, false)