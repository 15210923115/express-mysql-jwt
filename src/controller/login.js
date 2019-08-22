const BaseController = require('./base');
const { secret } = require('../config');

class LoginController extends BaseController {
    constructor(req, res, next, app) {
        super(req, res, next, app);
        this.mysql = app.mysqldb;
        this.jwt = app.jwttoken;
    }
    async login() {
        let username = this.req.body.username;
        let password = this.req.body.password;
        let querySql = `select * from user where username="${username}" and password="${password}"`;
        await this.mysql.query(querySql, (err, result) => {
            if (err) throw err;
            if (result.length > 0) {
                let token = this.jwt.sign({username}, secret, {expiresIn: 60*1});
                this.res.set({
                    "Token": token
                });
                this.success({id: result[0].id, username: result[0].username}, '登陆成功');
            } else {
                this.error({}, '用户名或密码错误');
            }
            this.next();
        });
    }
}

module.exports = LoginController;