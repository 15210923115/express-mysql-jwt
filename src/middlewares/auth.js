const jwt = require('jsonwebtoken');
const { secret } = require('../config/index');

function auth(req, res, next) {
    let token = req.body.token || req.query.token || req.headers.token;
    console.log(req.path);
    if (req.path === '/login') {
        next();
    } else {
        jwt.verify(token, secret, (err, decode) => {
            if (err) {
                res.status(403);
                res.json({
                    msg: 'token已过期，请重新登陆',
                });
            } else {
                next();
            }
        });
    }
}
module.exports = auth;