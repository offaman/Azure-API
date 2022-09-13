const sql = require("mssql");
const config = require("./dbconfig");




let poolPromise = new sql.ConnectionPool(config)
  .connect()
  .then((pool) => {
    return pool;
  })
  .catch(function (err) {
    console.log("Database Connection Failed! Bad Config: ", err);
  });

module.exports = poolPromise;