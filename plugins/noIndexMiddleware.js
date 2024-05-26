export default function (req, res, next) {
    if (req.headers.host !== 'ventureplans.us') {
        res.setHeader('X-Robots-Tag', 'noindex');
    }
    next();
}
