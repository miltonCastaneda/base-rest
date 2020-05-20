const express = require('express');

const router = require('./router');
const app = express();

router(app);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
