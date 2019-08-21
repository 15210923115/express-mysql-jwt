function register(app) {
    app.post('/register', (req, res, next) => {
        res.send('register');
        next();
    });
}

module.exports = register;