/* Main: initialize persistence and wire the independent game systems together. */
(function(root){'use strict';var T=root.TLT;function start(){T.state.load();T.ui.init();console.info('The Last Telegram ready. Run TLT.tests.run() for engine self-checks.')}if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start);else start();})(window);
