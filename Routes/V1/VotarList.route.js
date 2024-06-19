const express = require('express');
const votarListController = require('../../Controller/Votarlist.controller');
const router = express.Router()

router.route('/').get(votarListController.getAllVotar).post(votarListController.postVotar).put().patch().delete()


module.exports = router