function login(app) {
    app.post('/login', (req, res, next) => {
        res.send('login');
        next();
    });
}

module.exports = login;