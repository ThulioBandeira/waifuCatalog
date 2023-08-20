const express = require('express');
const { showWaifus, showSpecificWaifu } = require('../components/get');
const addWaifu = require('../components/post');
const changeWaifu = require('../components/put');
const replaceSomeInformation = require('../components/patch');
const deleteWaifu = require('../components/delete');

const rotas = express();

rotas.get('/waifus',showWaifus)
rotas.get('/waifus/:id',showSpecificWaifu)
rotas.post('/waifus',addWaifu)
rotas.put('/waifus/:id',changeWaifu)
rotas.patch('/waifus/:id',replaceSomeInformation)
rotas.delete('/waifus/:id',deleteWaifu)

module.exports = rotas