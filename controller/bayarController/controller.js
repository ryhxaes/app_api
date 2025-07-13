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

const historyBayarController = async (req, res) => {
    try {
        const nim = req.params.nim;
        const semester = req.params.semester;
        const result = await serviceBayar.historyBayarService(nim, semester);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const getBayarByIdController = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await serviceBayar.getBayarByIdService(id);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getQrCodeController = async (req, res) => {
    try {
        const id = req.params.id;
        const nim = req.params.nim;
        const jumlah = req.params.jumlah;
        const namaTagihan = req.params.namaTagihan;
        const result = await serviceBayar.getQrCodeService(id, nim, jumlah, namaTagihan);
        if (!result) {
            return res.status(404).json({ message: 'QR Code tidak ditemukan' });
        }
        res.status(200).json({ message: 'QR Code berhasil ditemukan', id: id, nim: nim, jumlah: jumlah, namaTagihan: namaTagihan, qrCode: result });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getbayarController,
    historyBayarController,
    getBayarByIdController,
    getQrCodeController
};