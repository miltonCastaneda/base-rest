const express = require('express');

const SampleServices = require('./services/sample');

console.log('init process');

const app = express();

//se agrega el SampleServices afuera para hacer la instancia solo una vez
//luego solo se invocan las funciones de ese objeto
const sample = new SampleServices();

app.get('/', async function (req, res) {

  //sample.create();
  const samples = await sample.getSamples();
  // samples.then((s) => console.log('samples', s));
  res.send(samples);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
