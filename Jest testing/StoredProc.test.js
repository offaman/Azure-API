const sql = require('mssql')
const databaseMock = require('./__mock__/database-mock/dbMock')
const sqlMetadata = require('./expectedInfo.json')
const constants = require('../constants/spAndQueries')

// jest.setTimeout(100000)



test('Test SQL Execute stored procedure', async()=>{
    let sqlParameters = [];
    sqlParameters.push(['studentId', sql.NVarChar, "1"]);
    let result = await databaseMock.executeStoredProcedure(constants.storedProcToInsert, sqlParameters);
    expect(result).toEqual(sqlMetadata);
})

