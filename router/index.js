/**
 * Exporta todas las rutas en un solo modulo
 */
const SampleRourter = require('./sample');

module.exports = (app) => {
  new SampleRourter(app);
};
