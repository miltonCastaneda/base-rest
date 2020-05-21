const express = require('express');

/**
 * Clase padre para rutas
 * Se agrega agui todo lo que es general entre todas las rutas
 */
class Rourter {
/**
 * Se crea router y se define el path para el contexto de un servicio
 * Las clases hijas son las encargadas de definir el controlador, endpoint y logica de cada uno
 * @param {*} app 
 * @param {*} pathApi 
 */
  constructor(app, pathApi) {
    this.router = express.Router();
    //se inicializa contexto para este serivicio
    app.use(pathApi, this.router);
    this.start();
  }

  /**
   * Lanza los servicios que se desan exponer del api actual ejmplo(sample)
   * este metodo es ejecutado por la clase padre Router, no pasa nada si no se agrega
   */
  start(){}
  
  generalMiddleware(nameAction, schemaParams, shcemaBody, schemaHeaders){

  }

  validationHandler(schema, check = 'body'){
    
  }
}

module.exports = Rourter;