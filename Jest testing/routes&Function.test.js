const database =  require('../database/databaseOps')
const querySp = require('../database/QueryandSP')
const sql = require('mssql')

const studentByIdOutput = require('../studentByIdOutput.json')
const storedProcToInsert = 'insertIntoStudentTable'


// const mockConnection = {
//     connect: jest.fn().mockResolvedValue(),  
// }; 
// poolPromise = jest.fn().mockResolvedValue(mockConnection);
jest.mock('../database/databaseOps');


test("Testing getStudentById request from database", async ()=>{
    let query= `select * from StudentDetails where StudentId = @studentId`
    let parameters = [['studentId',sql.NVarChar,'1']]
    let result = await querySp.executeQueryString(query,parameters)
    expect(result).toEqual(studentByIdOutput)
})


test("testing for insert student details", async ()=>{
    const student_info={
        "StudentId": "1132",
        "StudentName": "Saket Sharma",
        "GPA": 9,
        "Branch": "CS",
        "Section": "C"
    }
    database.insertStudent = jest.fn()
    expect(database.insertStudent(student_info)).toBe()
})

test("Testing post request to insert student", async ()=>{   
    const student_info=[
                ["StudentId", sql.NVarChar ,"1137"],
                ["StudentName",sql.NVarChar, "Saket Sharma"],
                ["GPA",sql.Float, 9],
                ["Branch",sql.NVarChar, "CS"],
                ["Section",sql.NVarChar, "C"]
            ]
    querySp.executeStoredProcedure = jest.fn()
    expect(querySp.executeStoredProcedure(storedProcToInsert,student_info)).toBe()
})


test("testing for stored proc", async ()=>{
    const student_info=[
        ["StudentId", sql.NVarChar ,"1137"],
        ["StudentName",sql.NVarChar, "Saket Sharma"],
        ["GPA",sql.Float, 9],
        ["Branch",sql.NVarChar, "CS"],
        ["Section",sql.NVarChar, "C"]
    ]
    querySp.executeStoredProcedure = jest.fn()
    expect(querySp.executeStoredProcedure(storedProcToInsert,student_info)).toBe()
})