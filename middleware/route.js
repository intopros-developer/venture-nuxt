export default function (context) {
    // Add the userAgent property to the context
    if (context && context.res && context.req && context.req.headers && !(context.req.headers.host === 'ventureplans.us' || context.req.headers.host === 'www.ventureplans.us')) {
        context.res.setHeader('X-Robots-Tag', 'noindex');
    }
    // context.userAgent = process.server ? context.req.headers['user-agent'] : navigator.userAgent;
}
