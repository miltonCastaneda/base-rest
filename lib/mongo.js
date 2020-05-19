const { MongoClient, ObjectId } = require('mongodb');
const logger = require('../utils/logger/logger.js');
const { config } = require('../config');

const MONGO_URI = config.dbUri;

class MongoLib {
  
  constructor(collection){
    this.collection = collection;
  }

  connect() {
    console.log("connect mongo");
    if (!MongoLib.connection) {
      console.log("cliente");

      this.client = new MongoClient(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true  });
      MongoLib.connection = new Promise((resolve, reject) => {
        this.client.connect((err) => {
          if (err) {
            reject(err);
          }

          //logger.info({msg:'Connected succesfully to mongo'});
          console.log("Connected succesfully to mongo");
          resolve(this.client.db());
        });
      });
    }
    console.log("connect mongo return connect ");
    return MongoLib.connection;
  }

  getAll( query, projection = {}) {
    return this.connect().then((db) => {
      return db
        .collection(this.collection)
        .find(query)
        .project(projection)
        .toArray();
    });
  }

  get(id) {
    return this.connect().then((db) => {
      return db.collection(this.collection).findOne({ _id: ObjectId(id) });
    });
  }

  create( data) {
    console.log('create sample db');
    return this.connect()
      .then((db) => {
        return db.collection(this.collection).insertOne(data);
      })
      .then((result) => {
        return result;
      });
  }

  createMany(data) {
    return this.connect()
      .then((db) => {
        return db.collection(this.collection).insertMany(data);
      })
      .then((result) => logger.info({message:'items inserted '}));
  }

  update(criteria, data) {
    return this.connect()
      .then((db) => {
        return db
          .collection(this.collection)
          .updateOne(criteria, { $set: data }, { upsert: true });
      })
      .then((result) => result.upsertedId || criteria);
  }
}

module.exports = MongoLib;
