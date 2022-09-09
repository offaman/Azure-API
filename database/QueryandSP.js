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
        parameters.forEach(elementContainingInfo => {
            let [name,dtype,value] = elementContainingInfo;
            request.input(name,dtype,value)
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
        parameters.forEach(elementContainingInfo => {
            let [name,dtype,value] = elementContainingInfo;
            request.input(name,dtype,value)
        });
        let info = await request.execute(spName)
        return info.recordsets
    }
}

module.exports = {executeQueryString,executeStoredProcedure}