

const flowMiddlewares = require('./flowMiddlewares')



const app = flowMiddlewares();


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
