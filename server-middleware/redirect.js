export default (req, res, next) => {
    const url = req.url;

    const redirects = {
        '/about': '/about-us',
        '/legal': '/legal-advisory',
    };

    if (redirects[url]) {
        const redirectPath = redirects[url];
        res.writeHead(301, { Location: redirectPath });
        res.end();
    } else {
        next();
    }
};
