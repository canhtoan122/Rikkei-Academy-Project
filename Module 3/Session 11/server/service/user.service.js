// nơi tương tác với database
// function lấy hết user

const database = require("../connection/connectionMysql2.js");
async function getAllUser(){
    // viết câu lệnh kết nối
    const query = "select * from user";
    const result = await database.execute(query);
    return result[0];
}
module.exports = {
    getAllUser
}
/*
    Viết các tính năng
    - Xóa user theo id
    - Cập nhật user theo id
    - Tìm kiếm
    - Sắp xếp theo tên, tuổi
    - Phân trang
 */