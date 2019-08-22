class BaseController {
    constructor(req, res, next) {
        this.req = req;
        this.res = res;
        this.next = next;
    }
    success(data, msg) {
        this.res.send({
            code: 0,
            data,
            msg
        });
        console.log(data,msg);
        this.next();
    }
    error(err, msg) {
        this.res.send({
            code: 1,
            err,
            msg
        });
        this.next();
    }
}

module.exports = BaseController;