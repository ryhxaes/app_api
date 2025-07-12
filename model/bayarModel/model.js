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
        const result = await db.query('SELECT tm.*, t.nama_tagihan FROM tagihan_mahasiswa tm JOIN jenis_tagihan t ON tm.id_jenis_tagihan = t.id WHERE tm.nim = ? AND tm.semester = ?', [nim, semester]);
        return result;
    } catch (error) {
        throw new Error(error.message);
    }
};

const getBayarById = async (id) => {
    try {
        const result = await db.query('SELECT t.*, tm.*, ubk.nim, ubk.name, ubk.kelas, ubk.email, ubk.phone FROM tagihan_mahasiswa tm JOIN user_bayar_kampus ubk ON tm.nim = ubk.nim JOIN jenis_tagihan t ON tm.id_jenis_tagihan = t.id WHERE tm.id = ?', [id]);
        return result[0];
    } catch (error) {
        throw new Error(error.message);
    }
};

module.exports = {
    getBayarById,
    getbayarModel,
    historyBayarModel
};