// ==UserScript==
// @name         Youtube AdBlock blocker blocker
// @namespace    http://tampermonkey.net/
// @version      1.0
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
                let popups = document.getElementsByTagName("tp-yt-paper-dialog");
                if (popups.length == 1) {
                    cLog("Found popup!");
                    popups.item(0).delete()
                    try {
                    document.getElementsByTagName("tp-yt-iron-overlay-backdrop").delete();
                    } catch {}
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