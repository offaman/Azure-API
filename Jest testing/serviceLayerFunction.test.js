const databaseOps =  require('../database/databaseOps')
const ExpectedStudentInfoById = require('./expectedInfo.json')

jest.mock('../database/databaseOps');


test('Test GetallStudentInfo on /getstudent', async() =>{
    databaseOps.getStudentById = jest.fn().mockReturnValueOnce(ExpectedStudentInfoById)
    expect(await databaseOps.getStudentById()).toEqual(ExpectedStudentInfoById);
});

test("testing for insert student details", async ()=>{
    const student_info={
        "StudentId": "2",
        "StudentName": "Saket Sharma",
        "GPA": 9,
        "Branch": "CS",
        "Section": "C"
    }
    expect(await databaseOps.insertStudent(student_info)).toBe()
})


