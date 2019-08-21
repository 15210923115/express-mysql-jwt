const mysql = require('mysql');
const { dbConfig } = require('../config/index');

let connetction = mysql.createConnection(dbConfig);
connetction.connect();

module.exports = connetction;