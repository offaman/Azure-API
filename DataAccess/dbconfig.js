const secretinfo = require('./getkeyvaultPassword')
const mssql = require('mssql')
const azureValues = require('../config/azureConfig')
require('dotenv').config()

async function dbConnect(){
  sqlConfig = {
      user: 'NodeJS',
      password: (await secretinfo.secretinfo(azureValues.SecretName)),
      database: "practice",
      server: "DESKTOP-IPSCV5H\\SPARTA",
      port: 51773,
      pool: {
          max: 10,
          min: 0,
          idleTimeoutMillis: 3000,
      },
      options: {
          trustServerCertificate: true, 
      },
    };
  let connectionPool = await mssql.connect(sqlConfig);
  return connectionPool
}

module.exports = {dbConnect}