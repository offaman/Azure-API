const databasefunctions = require('../database/databaseOps')


module.exports = async function (context, req) {
    try{
        await databasefunctions.deleteStudent(req.params.id);
    }catch(error){
        console.log(error)
    }
};
