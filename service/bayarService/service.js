const bayarService = require('../../model/bayarModel/model');

const getbayarService = async (id) => {
    try {
        const result = await bayarService.getbayarModel(id);
        return { 
            status: 200,
            message: 'data berhasil ditemukan', 
            content: result };
    } catch (error) {
        throw new Error(error.message);
    }
};

module.exports = {
    getbayarService
};