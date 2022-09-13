const mssql = require('mssql')
const tableforOperations = 'StudentDetails'
const queryandSp= require('./QueryandSP')
const storedProcToInsert = 'insertIntoStudentTable'
const updateStudentStoredProc = 'spUpdateStudentById'

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
    return queryandSp.executeStoredProcedure(updateStudentStoredProc,parameters)
}

async function deleteStudent(studentId){
    try{
        query= `delete from ${tableforOperations} where StudentId = @StudentId`
        parameters = [['studentId',mssql.NVarChar,studentId]]
        return queryandSp.executeQueryString(query,parameters)
    }catch(error){
        console.log('error',error);
    }
    return "abc";
}

module.exports={getStudentInfo,getStudentById,insertStudent,updateStudent, deleteStudent}
