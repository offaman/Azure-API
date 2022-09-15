const connectionPool = require('../config/dbconfig')
const database = require('../database/QueryandSP')
const sqlQuerymetadata = require('../getinfo.json')


const mockConnection = {
    connect: jest.fn().mockResolvedValue()
};


(async () =>{
const pool = await connectionPool.dbConnect()
pool = jest.fn().mockResolvedValue(mockConnection);
console.log(pool)
})()


database.executeQueryString = jest.fn((sqlQuery, parameters) => {
    switch (sqlQuery) {
        case "SqlTestQuery":
            return sqlQuerymetadata;
    }
});

module.exports = database


// database.executeStoredProcedure = jest.fn((storedProcedure, parameters) => {

//     switch (storedProcedure) {
//         case constants.STORED_PROCEDURES.InsertAttribute:
//             return dataAccess_insertAttribute_Metadata;
//     }

// });


