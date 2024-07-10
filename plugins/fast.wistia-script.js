export default ({ app }, inject) => {
    let scriptLoaded = false;

    function loadScripts() {
        if (!scriptLoaded) {
            const script1 = document.createElement('script');
            script1.src = 'https://fast.wistia.com/assets/external/E-v1.js';
            script1.defer = true;
            document.body.appendChild(script1);

            const script2 = document.createElement('script');
            script2.src = 'https://fast.wistia.net/assets/external/iframe-api-v1.js';
            script2.defer = true;
            document.head.appendChild(script2);

            scriptLoaded = true;
        }
    }

    let loadTimeout;
    const delayTime = 1000;

    function resetLoadTimeout() {
        if (loadTimeout) {
            clearTimeout(loadTimeout);
        }
        loadTimeout = setTimeout(loadScripts, delayTime);
    }

    document.addEventListener('mousemove', resetLoadTimeout);
    document.addEventListener('mousedown', resetLoadTimeout);
};
