require('dotenv').config();

const config = {
  development: {
    port: process.env.DEV_PORT || 3000,
    DOMAIN_NAME: process.env.DOMAIN_NAME_DEV,
    WEATHER_DOMAIN: process.env.WEATHER_DOMAIN,
    WEATHER_API_KEY: process.env.WEATHER_API_KEY,
  },
  production: {
    port: process.env.PROD_PORT,
    DOMAIN_NAME: process.env.DOMAIN_NAME,
    WEATHER_DOMAIN: process.env.WEATHER_DOMAIN,
    WEATHER_API_KEY: process.env.WEATHER_API_KEY,
  },
};

const env = process.env.NODE_ENV || 'development';

module.exports = config[env || 'production'];
