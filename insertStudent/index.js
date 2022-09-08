const databasefunctions = require('../database/databaseOps')

module.exports = (async function (context, req) {
    let infotoInsert = req.body
    await databasefunctions.insertStudent(infotoInsert)
    .then((res)=>{
        context.res = {body:res}
    })
    .catch((err)=>{
        console.log(err)
    })
});