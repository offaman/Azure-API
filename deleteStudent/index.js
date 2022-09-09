const databasefunctions = require('../database/databaseOps')
const logger = require('../Logging/logger')

module.exports = async function (context, req) {
    try{
        await databasefunctions.deleteStudent(req.params.id);
    }catch(error){
        logger.log(error)
    }
};
