const databasefunctions = require('../database/databaseOps')


module.exports = async function (context, req) {
    await databasefunctions.getStudentInfo().then(result =>{
        context.res = {body:result} 
    }).catch((err)=>{
        console.log('error',err)
    })
}

