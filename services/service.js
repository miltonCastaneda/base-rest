const MongoLib = require('../lib/mongo.js');

class Service {
  constructor(collection) {
    this.collection = collection;
    console.log("init service", collection);
    this.MongoLib = new MongoLib(collection);
  }
}

module.exports = Service;