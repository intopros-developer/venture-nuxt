export default ({ app }, inject) => {
    let userbackLoaded = false;
    let intercomLoaded = false;

    function loadUserbackScript() {
        if (!userbackLoaded) {
            window.Userback = window.Userback || {};
            Userback.access_token = '38243|75407|MC4B6gLHdzd608E1fRlAxMhf1';
            const script = document.createElement('script');
            script.src = 'https://static.userback.io/widget/v1.js';
            script.defer = true;
            document.head.appendChild(script);
            userbackLoaded = true;
        }
    }

    function loadIntercomScript() {
        if (!intercomLoaded) {
            window.intercomSettings = {
                api_base: 'https://api-iam.intercom.io',
                app_id: 'elswu46p',
            };

            (function () {
                var w = window;
                var ic = w.Intercom;
                if (typeof ic === 'function') {
                    ic('reattach_activator');
                    ic('update', w.intercomSettings);
                } else {
                    var d = document;
                    var i = function () {
                        i.c(arguments);
                    };
                    i.q = [];
                    i.c = function (args) {
                        i.q.push(args);
                    };
                    w.Intercom = i;
                    var l = function () {
                        var s = d.createElement('script');
                        s.type = 'text/javascript';
                        s.defer = true;
                        s.src = 'https://widget.intercom.io/widget/elswu46p';
                        var x = d.getElementsByTagName('script')[0];
                        x.parentNode.insertBefore(s, x);
                    };
                    var loadScript = function () {
                        setTimeout(l, 10000);
                    };
                    if (document.readyState === 'complete') {
                        loadScript();
                    } else if (w.attachEvent) {
                        w.attachEvent('onload', loadScript);
                    } else {
                        w.addEventListener('load', loadScript, false);
                    }
                }
            })();

            intercomLoaded = true;
        }
    }

    let loadTimeout;
    const delayTime = 5000;

    function resetLoadTimeout() {
        if (loadTimeout) {
            clearTimeout(loadTimeout);
        }
        loadTimeout = setTimeout(() => {
            loadUserbackScript();
            loadIntercomScript();
        }, delayTime);
    }

    document.addEventListener('mousemove', resetLoadTimeout);
    document.addEventListener('mousedown', resetLoadTimeout);

    inject('scriptLoader', {
        loadScriptsAfterInteraction: resetLoadTimeout,
    });
};
