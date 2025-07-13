const bayarModel = require('../../model/bayarModel/model');
const midtransClient = require('midtrans-client');
let snap = new midtransClient.Snap({
    isProduction: false,
    serverKey: process.env.MIDTRANS_SERVER_KEY
});

const createTransactionService = async (id, nim, jumlah, namaTagihan) => {
    try{
        console.log('server key', process.env.MIDTRANS_SERVER_KEY);
        let parameter = {
            transaction_details: {
                order_id: `INV-${id}-${nim}-${Date.now()}`,
                gross_amount: Number(jumlah)
            },
            item_details: [
                {
                    id: id.toString(),
                    price: Number(jumlah),
                    quantity: 1,
                    name: namaTagihan
                }
            ],
            customer_details: {
                first_name: nim
            }
        };

        const transaction = await snap.createTransaction(parameter);
        return {
            status: 200,
            message: 'berhasil membuat transaksi',
            content: transaction
        };
    }
    catch (error) {
        throw new Error(error.message);
    }
};


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
module.exports = {
    getBayarByIdService,
    getbayarService,
    historyBayarService,
    createTransactionService,
};