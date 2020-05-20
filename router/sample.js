const express = require('express');
const SampleService = require('../services/sample');

function samplesApi(app){

    let sampleService = new SampleService();

    let router = express.Router();
    app.use('/samples', router);

    get(router,sampleService);
}

function get(router, sampleService) {

  router.get('/', async function (req, res, next) {
    let samples;
    try {
        samples = await sampleService.getSamples();    
    } catch (error) {
        next(err);
    }

    res.status(200).json(samples);
  });
}


module.exports = samplesApi;