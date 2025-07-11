const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'bayar_kampus'
});

const db = pool.promise();

module.exports = db;