const database =  require('../database/databaseOps')

const ExpectedStudentInfoById = require('./getInfo.json')

jest.mock('../database/databaseOps');


jest.setTimeout(100000)






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


