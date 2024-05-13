export default function (req, res, next) {
    console.log(req.headers.host);
    if (req.headers.host !== 'ventureplans.us') {
        res.setHeader('X-Robots-Tag', 'noindex');
    }
    next();
}
