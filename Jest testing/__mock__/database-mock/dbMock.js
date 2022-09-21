const connectionPool = require('../../../DataAccess/dbconfig')
const database = require('../../../database/QueryandSP')
const metaData = require('../../expectedInfo.json')
const constants = require('../../../constants/spAndQueries')


const mockConnection = {
    connect: jest.fn().mockResolvedValue()
};


(async () =>{
const pool = await connectionPool.dbConnect()
pool = jest.fn().mockResolvedValue(mockConnection);
console.log(pool)
})()


database.executeStoredProcedure = jest.fn((spName,parameters) =>{
    switch(spName){
        case constants.storedProcToInsert:
            return metaData;
    }
})

module.exports = database



