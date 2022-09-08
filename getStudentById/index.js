const databasefunctions = require('../database/databaseOps')

module.exports = async function (context, req) {
    await databasefunctions.getStudentById(req.params.id).then(res=>{
        context.res = {body:res}
    }).catch((err)=>{
        console.log(err)
    })
}