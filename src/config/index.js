const dbConfig = {
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'expressmysqljwt'
};

const secret = 'jwtToken';

module.exports = { dbConfig, secret };