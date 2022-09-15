const database =  require('../database/databaseOps')
const querySp = require('../database/QueryandSP')
const sql = require('mssql')
const fs = require('fs')
const studentByIdOutput = require('../studentByIdOutput.json')
const storedProcToInsert = 'insertIntoStudentTable'
const ExpectedStudentInfoById = require('./getInfo.json')

jest.mock('../database/databaseOps');


jest.setTimeout(100000)


// const mockConnection = {
//     connect: jest.fn().mockResolvedValue()
// };

// pool= jest.fn().mockResolvedValue(mockConnection);


// test("Testing getStudentById request from database", async ()=>{
//     let query= `select * from StudentDetails where StudentId = @studentId`
//     let parameters = [['studentId',sql.NVarChar,'1']]
//     let result = await querySp.executeQueryString(query,parameters)
//     expect(result).toEqual(studentByIdOutput)
// })


// test("Testing getStudentById request from database", async ()=>{
//     const id = 1
//     let res = (await database.getStudentById(id))
//     console.log(res)
// })



test('Test GetallStudentInfo on /getstudent', async() =>{
    database.getStudentById = jest.fn().mockReturnValueOnce(ExpectedStudentInfoById)
    expect(await database.getStudentById()).toEqual(ExpectedStudentInfoById);
});


test("testing for insert student details", async ()=>{
    const student_info={
        "StudentId": "2",
        "StudentName": "Saket Sharma",
        "GPA": 9,
        "Branch": "CS",
        "Section": "C"
    }
    expect(await database.insertStudent(student_info)).toBe()
})


// test("testing for stored proc", async ()=>{
//     const student_info=[
//         ["StudentId", sql.NVarChar ,"1137"],
//         ["StudentName",sql.NVarChar, "Saket Sharma"],
//         ["GPA",sql.Float, 9],
//         ["Branch",sql.NVarChar, "CS"],
//         ["Section",sql.NVarChar, "C"]
//     ]
//     // querySp.executeStoredProcedure = jest.fn()
//     expect(querySp.executeStoredProcedure(storedProcToInsert,student_info)).toBe()
// })