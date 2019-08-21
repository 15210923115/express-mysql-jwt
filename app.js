const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const router = require('./src/router');
const { secret } = require('./src/config/index');
// 获取数据库连接对象
const connection = require('./src/db/mysql');
// 实力化app
const app = express();
// 处理post body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// 处理跨域
app.all("*", function(req, res, next) {
    res.header("Access-Control-Allow-Credentials", true);
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-Width");
    res.header("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, HEADER, OPTIONS");
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

// app.use(function(req, res, next) {
//     if (req.url != '/user/login' && req.url != "/user/register") {
//         let body = req.body.token || req.query.token || req.headers.token;
//         jwt.verify(token, secret, function(err, decode) {
//             if (err) {
//                 res.json({
//                     msg: 'token已过期，请重新登陆',
//                     resultCode: '403'
//                 });
//             } else {
//                 next();
//             }
//         });
//     } else {
//         next();
//     }
// });

router(app);

app.listen('3111', (err) => {
    if (err) {
        console.log(err);
    }
    console.log('server is running at 3111 port ...');
});
