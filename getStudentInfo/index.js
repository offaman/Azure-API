const databasefunctions = require('../database/databaseOps')

async function getinfo(context, req) {
    await databasefunctions.getStudentInfo().then(result =>{
        context.res = {body:result} 
    }).catch((err)=>{
        console.log('error',err)
    })
}

module.exports = getinfo