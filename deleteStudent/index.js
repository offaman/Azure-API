const databasefunctions = require('../database/databaseOps')

module.exports = (async function (context, req) {
    await databasefunctions.deleteStudent(req.params.id).then(result=>{    
    }).catch((err)=>{
        logger.log('error',err)
    })
});
