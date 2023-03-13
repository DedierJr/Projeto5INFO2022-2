const express = require('express');
const router = express.Router();

const publicController = require('../controller/publicController')

router.get('/',publicController.abreindex)

router.get('/timeline', publicController.renderTimeline);

module.exports = router