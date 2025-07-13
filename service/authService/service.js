const modelAuth = require('../../model/authModel/model');

const authService = async (nim, password) => {
    try {
        const users = await modelAuth.authModel(nim, password);
        return users;
    } catch (error) {
        throw new Error(error.message);
    }
}

const logoutService = async (id) => {
    try {
        const users = await modelAuth.logoutModel(id);
        return users;
    } catch (error) {
        throw new Error(error.message);
    }
}

module.exports = {
    authService,
    logoutService
}