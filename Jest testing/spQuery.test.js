const sql = require('mssql')
const database = require('../Jest testing/spQueryMocking')
const sqlQuerymetadata = require('../getinfo.json')

jest.setTimeout(100000)


test('Test SQL Execute Query', async () => {
    let sqlParameters = [];
    sqlParameters.push(['studentId', sql.NVarChar, "1"]);
    let result = await database.executeQueryString("SqlTestQuery", sqlParameters);
    expect(result).toEqual(sqlQuerymetadata);
});

