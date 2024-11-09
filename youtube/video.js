'use strict'

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        videoId: videoId,
        playerVars: {
            'playsinline': 1,
            'rel': 0
        }
    });
};