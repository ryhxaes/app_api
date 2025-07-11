const express = require('express');
const router = express.Router();
const controllerUser = require('../controller/authController/controller');
const controllerBayar = require('../controller/bayarController/controller');
//login dan logout
router.get('/users/:nim/:password', controllerUser.authController); 
router.get('/logout/:id', controllerUser.logoutController);
//bayar
router.get('/getbayar/:id', controllerBayar.getbayarController);


module.exports = router;