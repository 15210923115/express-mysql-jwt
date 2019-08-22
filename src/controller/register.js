const BaseController = require('./base');

class RegisterController extends BaseController {
    constructor(req, res, next, app) {
        super(req, res, next);
        this.mysql = app.mysqldb;
    }
    async register() {
        let username = this.req.body.username;
        let password = this.req.body.password;
        if (!username || !password) {
            this.success({}, '用户信息错误！');
        }
        let querySql = `select * from user where username="${username}" and password="${password}"`;
        await this.mysql.query(querySql, async (err, result) => {
            if (err) throw err;
            if (result.length > 0) {
                this.success({}, '用户已存在');
            } else {
                let insertSql = `insert into user (username, password) values ("${username}","${password}")`;
                await this.mysql.query(insertSql, (err, result) => {
                    if (err) throw err;
                    if (result.affectedRows !== 0) {
                        this.success({ username, password },'恭喜您注册成功');
                    } else {
                        this.error({ result },'注册失败，请重新注册');
                    }
                });
            }
            this.next();
        });
    }
}

module.exports = RegisterController;