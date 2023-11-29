const express = require('express');
const {handleGenerateNewsShortURL} = require('../controllers/url');

const router = express.Router();

router.post('/', handleGenerateNewsShortURL);

module.exports = router;