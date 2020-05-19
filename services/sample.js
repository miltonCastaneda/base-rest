const Service = require('../services/service');
const moment = require('moment');


class SampleServices extends Service {

  constructor() {
    super('sample');
  }

  create() {
    let sampleToInsert = {
      sample: 'sample',
      dateOfAdmission: moment().toDate(),
    };

    return this.MongoLib.create( sampleToInsert);
  }

  getSamples() {
    let query = {};
    let projection = {};

    return this.MongoLib.getAll( query, projection);
  }
}

module.exports = SampleServices;
