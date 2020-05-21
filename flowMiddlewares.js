
const router = require('./router');
const express = require('express');

const {
  logErrors,
  wrapErrors,
  errorHandler,
} = require('./utils/middlewares/errorHandlers.js');

module.exports = () => {
  let app = express();
  app.use(express.json());

  router(app);

  app.use(logErrors);
  app.use(wrapErrors);
  app.use(errorHandler);

  return app;
};
