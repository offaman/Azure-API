const database =  require('../database/databaseOps')
const querySp = require('../database/QueryandSP')
const sql = require('mssql')
const outputResult =  require('../getinfo.json')
let poolPromise = require('../config/dbConnection')
const studentByIdOutput = require('../studentByIdOutput.json')
const storedProcToInsert = 'insertIntoStudentTable'


const mockConnection = {
    connect: jest.fn().mockResolvedValue(),  
}; 
poolPromise = jest.fn().mockResolvedValue(mockConnection);


test("Testing getStudentById request from database", async ()=>{
    let query= `select * from StudentDetails where StudentId = @studentId`
    let parameters = [['studentId',sql.NVarChar,'1']]
    let result = await querySp.executeQueryString(query,parameters)
    
    expect(result).toEqual(studentByIdOutput)
})


test("Testing post request to insert student", async ()=>{   
    const s= {
        "studentId": "1133",  
        "studentName": "Abhishek Locham", 
        "GPA": 8.3,
        "Branch": "CS",
        "Section": "A"
    }
    querySp.executeStoredProcedure = jest.fn()
    expect(querySp.executeStoredProcedure(storedProcToInsert,s)).toBe()
})