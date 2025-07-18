const express = require('express');
const router = express.Router();
const controllerUser = require('../controller/authController/controller');
const controllerBayar = require('../controller/bayarController/controller');
//login dan logout
router.get('/users/:nim/:password', controllerUser.authController); 
router.get('/logout/:id', controllerUser.logoutController);
//bayar
router.get('/getbayar/:id', controllerBayar.getbayarController);
router.get('/historyBayar/:nim/:semester', controllerBayar.historyBayarController);
router.get('/getBayarById/:id', controllerBayar.getBayarByIdController);
router.get('/getQrCode/:id/:nim/:jumlah/:namaTagihan', controllerBayar.getQrCodeController);
module.exports = router;