const db = require('../../config/db');

const getbayarModel = async (id) => {
    try {
        const result = await db.query('SELECT * FROM pembayaran WHERE nim = ?', [id]);
        return result[0];
    } catch (error) {
        throw new Error(error.message);
    }
};

module.exports = {
    getbayarModel
};