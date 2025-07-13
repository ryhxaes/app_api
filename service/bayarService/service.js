const bayarModel = require('../../model/bayarModel/model');

const getbayarService = async (id) => {
    try {
        const result = await bayarModel.getbayarModel(id);
        return { 
            status: 200,
            message: 'data berhasil ditemukan', 
            content: result };
    } catch (error) {
        throw new Error(error.message);
    }
};

const historyBayarService = async (nim, semester) => {
    try {
        const result = await bayarModel.historyBayarModel(nim, semester);
        return {
            status: 200,
            message: 'data berhasil ditemukan',
            content: result
        };
    } catch (error) {
        throw new Error(error.message);
    }
};

const getBayarByIdService = async (id) => {
    try {
        const result = await bayarModel.getBayarById(id);
        return {
            status: 200,
            message: 'data berhasil ditemukan',
            content: result
        };
    } catch (error) {
        throw new Error(error.message);
    }
};

const getQrCodeService = async (id, nim, jumlah, namaTagihan) => {
    try {
        // const result = await bayarModel.getQrCode(id, nim, jumlah, namaTagihan);

        return { id, nim, jumlah, namaTagihan }; // Placeholder for actual QR code generation logic
    } catch (error) {
        throw new Error(error.message);
    }
}

module.exports = {
    getBayarByIdService,
    getbayarService,
    historyBayarService
};