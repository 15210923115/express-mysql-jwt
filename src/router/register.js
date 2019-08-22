const RegisterController = require('../controller/register');

function register(app) {
    app.post('/register', (req, res, next) => {
        let registerController = new RegisterController(req, res, next, app);
        registerController.register();
    });
}

module.exports = register;