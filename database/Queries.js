const constants = require('../constants/spAndQueries')

const getStudentByIdQuery = `select * from ${constants.tableforOperations} where StudentId = @studentId`
const GetallStudentInfo = `select * from ${constants.tableforOperations}`
const deleteStudentById = `delete from ${constants.tableforOperations} where StudentId = @StudentId`

module.exports = {getStudentByIdQuery,GetallStudentInfo,deleteStudentById}