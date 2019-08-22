function home(app) {
    app.get('/', (req, res, next) => {
        res.send('home page');
        next();
    });
}

module.exports = home;