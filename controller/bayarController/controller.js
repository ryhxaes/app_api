const serviceBayar = require('../../service/bayarService/service');

const getbayarController = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await serviceBayar.getbayarService(id);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    getbayarController
}