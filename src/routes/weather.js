const express = require('express');
const getCityCurrentWeather = require('../controllers/weatherController');
const router = express.Router();

router.post('/weather', getCityCurrentWeather);

module.exports = router;

