const boom = require('@hapi/boom');
const { config } = require('../../config');
const logger = require('../logger/logger');
/**
 * Define si se retorna el error con el stack o solo el mensaje, esto depende del ambiente
 *
 * @param {Mensaje de error} error
 * @param {Stack arrojado en el error, solo visualiado en ambiente de desarrollo} stack
 */
function withErrorBody(error) {

    return {
      responseHeader: {
        statusCode: '004',
        statusMessage: 'Failed to complete the transaction.',
      },
      responseError: {
        ...error,
      }
    };
}

/**
 * Middleware imprime los errores capturados en consola
 * @param {Error capturado sea de formato boom o no} err
 * @param {Request en question} req
 * @param {Respuesta en question} res
 * @param {middleware siguiente} next
 */
function logErrors(err, req, res, next) {
  
  logger.error({
    requestType: req.rType,
    reqId: req.id,
    rs: res.body,
    err: err.stack
  });

  next(err);
}

/**
 * Middleware que ayuda a darle manejo al error, 
 * si es reconocido en formato de boom o no
 * Bomm ayuda a manejar errores mas legibles para la respuesta
 * @param {Error capturado sea de formato boom o no} err
 * @param {Request en question} req
 * @param {Respuesta en question} res
 * @param {middleware siguiente} next
 */
function wrapErrors(err, req, res, next) {
  if (!err.isBoom) {
    next(boom.badImplementation(err));
  }

  next(err);
}

/**
 * Middleware para lanzar respuesta de error
 * @param {Error capturado} err
 * @param {Request en question} req
 * @param {Respuesta en question} res
 * @param {middleware siguiente} next
 */
function errorHandler(err, req, res, next) {
  // eslint-disable-line
  const {
    output: { statusCode, payload },
  } = err;

  res.status(statusCode);
  res.json(withErrorBody(payload));
}

module.exports = {
  logErrors,
  wrapErrors,
  errorHandler,
};
