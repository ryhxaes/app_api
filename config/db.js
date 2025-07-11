const mysql = require('mysql2');

const pool = mysql.createPool({
    host: '103.125.180.35',
    user: 'kodehanc_kodehan',
    password: '2p0]7{O)V6zK',
    database: 'kodehanc_kodehan'
});

const db = pool.promise();

module.exports = db;