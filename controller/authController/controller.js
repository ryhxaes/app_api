const serviceAuth = require ('../../service/authService/service');
const authController = async (req, res) => {
    try {
        const nim = req.params.nim;
        const password = req.params.password;
        const result = await serviceAuth.authService(nim, password);
        console.log(result);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const logoutController = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await serviceAuth.logoutService(id);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    authController,
    logoutController
}