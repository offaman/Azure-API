const mssql = require('mssql')
const logger = require('../Logging/logger')
const tableforOperations = 'StudentDetails'
const queryandSp= require('./QueryandSP')
const storedProcToInsert = 'insertIntoStudentTable'


async function getStudentInfo(){
    query= `select * from ${tableforOperations}`
    return queryandSp.executeQueryString(query)
}

async function getStudentById(studentId){

    query= `select * from ${tableforOperations} where StudentId = @studentId`

    parameters = [['studentId',mssql.NVarChar,studentId]]

    return queryandSp.executeQueryString(query,parameters)
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
    console.log(parameters)
    return queryandSp.executeStoredProcedure(storedProcToInsert,parameters)
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
    updatequery = `update ${tableforOperations} set StudentName = @StudentName ,GPA = @GPA ,Branch = @Branch , Section = @Section where StudentId = @StudentId`
    return queryandSp.executeQueryString(updatequery,parameters)
}

async function deleteStudent(studentId){
    try{
        query= `delete from ${tableforOperation} where StudentId = @StudentId`
        parameters = [['studentId',mssql.NVarChar,studentId]]
        return queryandSp.executeQueryString(query,parameters)
    }catch(error){
        logger.log('error',error);
    }
    return "abc";
}


module.exports={getStudentInfo,getStudentById,insertStudent,updateStudent, deleteStudent}
