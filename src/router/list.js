const ListController = require('../controller/list');

function list(app) {
    app.get('/list', (req, res, next) => {
        let listController = new ListController(req, res, next, app);
        listController.userlist();
    });
}

module.exports = list;