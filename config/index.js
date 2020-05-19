require('dotenv').config();

const config = {
    dev: process.env.NODE_ENV.trim() !== 'production',
    port: process.env.PORT || 3000,
    cors: process.env.CORS,
    dbUri: process.env.MONGO_CONECTION_STRING,
    logFolder: process.env.lOG_FOLDER
}

module.exports = { config };
