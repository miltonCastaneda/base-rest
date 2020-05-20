const samplesApi = require('./sample');

function router(app) {
  samplesApi(app);
}

module.exports = router;
