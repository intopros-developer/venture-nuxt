export default ({ app }, inject) => {
    setTimeout(() => {
        loadGtmScript();
    }, 3000);

    function loadGtmScript() {
        const headScript = document.createElement('script');
        headScript.src = 'https://www.googletagmanager.com/gtag/js?id=AW-11266175330';
        headScript.defer = true;
        document.head.appendChild(headScript);

        const gtagScript = document.createElement('script');
        gtagScript.defer = true;
        gtagScript.innerHTML = `
            window.dataLayer = window.dataLayer || [];
            function gtag() {dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-11266175330');
        `;
        document.head.appendChild(gtagScript);

        const gtmScript = document.createElement('script');
        gtmScript.defer = true;
        gtmScript.innerHTML = `
            (function (w, d, s, l, i) {
                w[l] = w[l] || [];
                w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
                var f = d.getElementsByTagName(s)[0],
                    j = d.createElement(s),
                    dl = l != 'dataLayer' ? '&l=' + l : '';
                j.async = true;
                j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
                f.parentNode.insertBefore(j, f);
            })(window, document, 'script', 'dataLayer', 'GTM-T7N3SGS');
        `;
        document.head.appendChild(gtmScript);

        const noscriptIframe = document.createElement('noscript');
        noscriptIframe.innerHTML = `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-T7N3SGS" height="0" width="0" style="display: none; visibility: hidden"></iframe>`;
        document.body.appendChild(noscriptIframe);
    }
};
