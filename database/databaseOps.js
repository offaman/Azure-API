const mssql = require('mssql')
const queryandSp= require('./QueryandSP')
const constants = require('../constants/spAndQueries')

async function getStudentInfo(){
    const info = await queryandSp.executeStoredProcedure(constants.getallStudentInfo)
    return  info.recordsets
}

async function getStudentById(studentId){
    parameters = [['studentId',mssql.NVarChar,studentId]]
    const info = await queryandSp.executeStoredProcedure(constants.getStudentInfoById,parameters)
    return info.recordsets
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
        return queryandSp.executeStoredProcedure(constants.deleteStudentById,parameters)
    }catch(error){
        console.log('error',error);
    }
}

module.exports={getStudentInfo,getStudentById,insertStudent,updateStudent, deleteStudent}