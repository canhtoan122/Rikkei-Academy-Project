
const database = require("../configs/db.config.js");
async function getAllUser(){
    // viết câu lệnh kết nối
    const query = "select * from user";
    const result = await database.execute(query);
    return result[0];
}
module.exports = {
    getAllUser
}