const tableforOperations = 'StudentDetails'
const mssql = require('mssql')
const config = require('../config/dbconfig')

async function executeQueryString(queryString, parameters){
    const pool = await mssql.connect(config);
    let request = pool.request();
    if(parameters == undefined){
        let info  = await request.query(queryString);
        return info.recordsets;
    }else{
        parameters.forEach(element => {
            request.input(element[0],element[1],element[2])
        });
        let info = await request.query(queryString)
        return info.recordsets
    }
}

async function executeStoredProcedure(spName, parameters){
    const pool = await mssql.connect(config);
    let request = pool.request();
    if(parameters == undefined){
        let info  = await request.execute(spName);
        return info.recordsets;
    }
    else{
        parameters.forEach(element => {
            request.input(element[0],element[1],element[2])
        });
        let info = await request.execute(spName)
        return info.recordsets
    }
}

module.exports = {executeQueryString,executeStoredProcedure}