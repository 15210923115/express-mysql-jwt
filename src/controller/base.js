class BaseController {
    success(res, data) {
        res.body = {
            code: 0,
            data
        };
    }
    error(res, err) {
        res.body = {
            code: 1,
            err
        };
    }
}

module.exports = BaseController;