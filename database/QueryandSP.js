const dbConnection = require('../DataAccess/dbconfig')

async function executeQueryString(queryString, parameters){
    const pool = await dbConnection.dbConnect()
    let request = pool.request();
    if(parameters == undefined || parameters == null){
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
    const pool = await dbConnection.dbConnect()
    let request = pool.request();
    if(parameters == undefined || parameters == null){
        request.execute(spName);
    }
    else{
        parameters.forEach(elementContainingInfo => {
            let [name,dtype,value] = elementContainingInfo;
            request.input(name,dtype,value)
        });

    request.execute(spName)
    }
}

module.exports = {executeQueryString,executeStoredProcedure}