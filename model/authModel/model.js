const db = require('../../config/db');
const jwt = require('jsonwebtoken');

const secretKey = '6c7f7dc46a9d464aa984179aed70f8a8a84d3489cd5cca1e722ce4e8e30bfbd9b472f62d6d324f24fe92edb0684004da7055de555be6806c24c259339e186cf3';
const authModel = async (nim, password) => {
    try {
        const activeTokens = new Map(); // Key-value pair: userId - token

        const users = await db.query('SELECT * FROM user_bayar_kampus WHERE nim = ? AND password = ?', [nim, password]);
        if (users[0].length > 0) {
            await db.query('UPDATE user_bayar_kampus SET is_login = 1 WHERE nim = ?', [nim]);
            const token = jwt.sign({ userId: users[0][0].id, nim: users[0][0].nim }, secretKey, { expiresIn: '1h' });
            
            // Simpan token di memory
            activeTokens.set(users[0][0].id, token);
            
            return { success: true, data: users[0][0], token };
        }
        return { success: false, message: 'User not found' };

    } catch (error) {
        throw new Error(error.message);
    }
}

const logoutModel = async (id) => {
    try {
        await db.query('UPDATE user_bayar_kampus SET is_login = 0 WHERE id = ?', id);
        return { success: true, message: 'Logout success' };
    } catch (error) {
        throw new Error(error.message);
    }
}

module.exports = {
    authModel,
    logoutModel
};