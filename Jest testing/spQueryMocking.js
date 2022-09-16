const connectionPool = require('../DataAccess/dbconfig')
const database = require('../database/QueryandSP')
const sqlQuerymetadata = require('../getinfo.json')


const mockConnection = {
    connect: jest.fn().mockResolvedValue()
};


(async () =>{
const pool = await connectionPool.dbConnect()
pool = jest.fn().mockResolvedValue(mockConnection);
console.log(pool)
})()


database.executeQueryString = jest.fn((sqlQuery, parameters) => {
    switch (sqlQuery) {
        case "SqlTestQuery":
            return sqlQuerymetadata;
    }
});

module.exports = database



