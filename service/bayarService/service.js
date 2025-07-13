const bayarModel = require('../../model/bayarModel/model');
const midtransClient = require('midtrans-client');

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

let snap = new midtransClient.Snap({
    isProduction: false,
    serverKey: process.env.MIDTRANS_SERVER_KEY
});

const getQrCodeService = async (id, nim, jumlah, namaTagihan) => {
    try {
        console.log('serverKey:', process.env.MIDTRANS_SERVER_KEY);
        const params = {
            transaction_details: {
                order_id: `INV-${id}-${nim}-${Date.now()}`,
                gross_amount: Number(jumlah)
            },
            customer_details: {
                first_name: nim,
                last_name: namaTagihan
            }
        };
        const transaction = await snap.createTransaction(params);
        return res.status(200).json({
            message: 'QR Code berhasil dibuat',
            data: transaction,
            qr_code: transaction.qr_code_url,
            token: transaction.token
        });
    } catch (error) {
        throw new Error(error.message);
    }
};

module.exports = {
    getBayarByIdService,
    getbayarService,
    historyBayarService,
    getQrCodeService
};