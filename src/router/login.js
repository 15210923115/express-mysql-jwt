const LoginController = require('../controller/login');

function login(app) {
    app.post('/login', (req, res, next) => {
        let loginController = new LoginController(req, res, next, app);
        loginController.login();
    });
}

module.exports = login;