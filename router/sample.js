const Rourter = require('./router');
const SampleService = require('../services/sample');

/**
 * Servicio de ejemplo
 * muestra como utilizar Router
 */
class SampleRourter extends Rourter {
  constructor(app) {
    super(app, '/samples');
  }

  /**
   * Lanza los servicios que se desan exponer del api actual ejmplo(sample)
   * este metodo es ejecutado por la clase padre Router, no pasa nada si no se agrega
   */
  start() {
    this.sampleService = new SampleService();
    this.get();
  }

  /**
   * Routa get, lo servicios se definen en el constructor si son, necesarios mas servicios
   * se define antes de recibir la peticion en este caso antes del get
   */
  get() {
    let self = this;
    this.router.get(
      '/',
      this.generalMiddleware('', schemaParams, shcemaBody, schemaHeaders),
      async function (req, res, next) {
        try {
          let samples = await self.sampleService.getSamples();
          res.status(200).json(samples);
        } catch (err) {
          next(err);
        }
      }
    );
  }
}

module.exports = SampleRourter;
