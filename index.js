const express = require('express');
const cors = require('cors');
const bodyParserErrorHandler = require('./src/middlewares/bodyParserErrorHandler');
const requireObjectBody = require('./src/middlewares/requireObjectBody');

const expressConfig = require('./src/config/expressConfig');
const limiter = require('./src/config/limiter');
const errorHandler = require('./src/middlewares/errorHandler');
const routes = require('./src/routes/routes');

start();

async function start() {
  const app = express();

  const corsOptions = {
    origin: expressConfig.DOMAIN_NAME,
  };

  app.use(cors(corsOptions));
  app.use(express.json());
  app.use(bodyParserErrorHandler);
  app.use(express.urlencoded({ extended: true }));
  app.use(limiter);
  app.use(['PUT', 'POST'], requireObjectBody);
  routes(app);
  
  app.use(errorHandler);

  app.listen(expressConfig.port || 3000, () => {
    console.log(`App is listening on port ${expressConfig.port || 3000}`);
  });
}
