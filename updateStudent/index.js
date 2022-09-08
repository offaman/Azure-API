const databaseFunction = require('../database/databaseOps')

module.exports = async function (context, req) {
    await databaseFunction.updateStudent(req.body).then(res=>{
        context.res = {body:res}
    }).catch((err)=>{
        console.log(err)
    })
}