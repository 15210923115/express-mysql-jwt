function list(app) {
    app.get('/list', (req, res, next) => {
        res.send('list');
        next();
    });
}

module.exports = list;