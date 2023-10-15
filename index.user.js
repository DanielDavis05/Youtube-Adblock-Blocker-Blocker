// ==UserScript==
// @name         Youtube AdBlock blocker blocker
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Block those annoying "Ad blockers are not allowed on YouTube" popups.
// @author       Sheezy-Systems
// @match        https://www.youtube.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var observer = new MutationObserver(function(mutationsList) {
        mutationsList.forEach(function(mutation) {
            if (mutation.type === 'childList') {
                if (document.querySelector('tp-yt-paper-dialog') && document.getElementById('dismiss-button')) {
                    cLog("Found popup!");
                    document.getElementById('dismiss-button').click();
                    document.querySelector('.ytp-play-button.ytp-button').click();
                }
            }
        });
    });

    observer.observe(document, { childList: true, subtree: true });

    function cLog(msg) {
        console.log("[ytabbb]: " + msg);
    }

})();
