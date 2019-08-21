function home(app) {
    app.get('/', (req, res, next) => {
        res.send('home');
        next();
    });
}

module.exports = home;