const SampleRourter = require('./sample');

function router(app) {
  new SampleRourter(app);
}

module.exports = router;
