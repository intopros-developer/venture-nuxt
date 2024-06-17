export default ({ app }, inject) => {
    setTimeout(() => {
        loadScript();
    }, 3000);

    function loadScript() {
        if (!window.externalScriptLoaded) {
            const script = document.createElement('script');
            script.src = 'https://fast.wistia.com/assets/external/E-v1.js';
            script.defer = true;
            document.body.appendChild(script);
            window.externalScriptLoaded = true;
        }

        if (!window.wistiaScriptLoaded) {
            const script = document.createElement('script');
            script.src = 'https://fast.wistia.net/assets/external/iframe-api-v1.js';
            script.defer = true;
            document.head.appendChild(script);
            window.wistiaScriptLoaded = true;
        }
    }
};
