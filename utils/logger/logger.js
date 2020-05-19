const { createLogger, format, transports } = require('winston');

const moment = require('moment');

module.exports = createLogger({
  format: format.combine(
    format.simple(),
    format.timestamp(),
    format.printf((info) => `[${info.timestamp}]|${info.level}|${JSON.stringify(info.message)}`)
  ),
  transports: [
    new transports.File({
      maxsize: 5000000,
      maxFiles: 5,
      filename: `${__dirname}/../../logs/t1-sec-iuvi-api-${moment().format('YYYYMMDDHHmm')}.log`,
    })
  ],
});
