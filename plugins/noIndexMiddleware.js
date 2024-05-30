export default function (req, res, next) {
    if (res && req.headers(req.headers.host !== 'ventureplans.us' || req.headers.host !== 'www.ventureplans.us')) {
        res.setHeader('X-Robots-Tag', 'noindex');
    }
    next();
}
