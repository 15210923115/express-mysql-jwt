const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const auth = require('./src/middlewares/auth');
const router = require('./src/router');
const mysql = require('mysql');
const { dbConfig } = require('./src/config/index');
// 创建数据库连接对象
let connection = mysql.createConnection(dbConfig);
// 连接数据库
connection.connect();
// 实力化app
const app = express();
// 挂载db
app.mysqldb = connection;
// 挂载jwt
app.jwttoken = jwt;
// 处理post body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// 处理跨域 也可以用cors库
app.all("*", function(req, res, next) {
    res.header("Access-Control-Allow-Credentials", true);
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-Width");
    res.header("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, HEADER, OPTIONS");
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});
// token过期
app.use(auth);
// 路由
router(app);
// 启动
app.listen('3111', (err) => {
    if (err) {
        console.log(err);
    }
    console.log('server is running at 3111 port ...');
});
