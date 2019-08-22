const BaseController = require('./base');

class ListController extends BaseController {
    constructor(req, res, next, app) {
        super(req, res, next, app);
        this.mysql = app.mysqldb;
    }
    async userlist() {
        let listSql = `select id, username from user`;   
        await this.mysql.query(listSql, (err, result) => {
            if (err) throw err;
            this.success({list: result}, "");
            this.next();
        });
    }
}

module.exports = ListController;