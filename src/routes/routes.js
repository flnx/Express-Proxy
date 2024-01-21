const weatherRoute = require('./weather');

module.exports = (app) => {
  app.use(weatherRoute);
};
