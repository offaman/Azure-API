const mssql = require('mssql')
const queryandSp= require('./QueryandSP')
const constants = require('../constants/spAndQueries')
const queries =  require('./Queries')

async function getStudentInfo(){
    return queryandSp.executeQueryString(queries.GetallStudentInfo)
}

async function getStudentById(studentId){
    parameters = [['studentId',mssql.NVarChar,studentId]]
    return queryandSp.executeQueryString(queries.getStudentByIdQuery,parameters)
}

async function insertStudent(StudentDetails){
    parameters = []
    for(let key in StudentDetails){
        let singleParam=[]
        if(key == 'GPA'){
            dtype = mssql.Float
        }else{
            dtype = mssql.NVarChar 
        }
        singleParam.push(key, dtype, StudentDetails[key])
        parameters.push(singleParam)
    }
    
    return queryandSp.executeStoredProcedure(constants.storedProcToInsert,parameters)
}


async function updateStudent(StudentDetails){
    parameters = []
    for(let key in StudentDetails){
        let singleParam=[]
        if(key == 'GPA'){
            dtype = mssql.Float
        }else{
            dtype = mssql.NVarChar 
        }
        singleParam.push(key, dtype, StudentDetails[key])
        parameters.push(singleParam)        
    }
    return queryandSp.executeStoredProcedure(constants.updateStudentStoredProc,parameters)
}

async function deleteStudent(studentId){
    try{
        parameters = [['studentId',mssql.NVarChar,studentId]]
        return queryandSp.executeQueryString(queries.deleteStudentById,parameters)
    }catch(error){
        console.log('error',error);
    }
    return "abc";
}

module.exports={getStudentInfo,getStudentById,insertStudent,updateStudent, deleteStudent}
