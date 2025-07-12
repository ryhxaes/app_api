const db = require('../../config/db');

const getbayarModel = async (id) => {
    try {
        const result = await db.query('SELECT * FROM pembayaran WHERE nim = ?', [id]);
        return result[0];
    } catch (error) {
        throw new Error(error.message);
    }
};

const historyBayarModel = async (nim, semester) => {
    try {
        const result = await db.query('SELECT * FROM tagihan_mahasiswa WHERE nim = ? AND semester = ?', [nim, semester]);
        return result;
    } catch (error) {
        throw new Error(error.message);
    }
};

module.exports = {
    getbayarModel,
    historyBayarModel
};