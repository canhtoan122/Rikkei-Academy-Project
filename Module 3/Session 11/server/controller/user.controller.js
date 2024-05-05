// Cách 1 tạo class
// class UserController{
//     constructor(){

//     }
//     // những cái hàm
//     // lấy tất cả user
//     getAllUser(){

//     }
//     // lấy 1 user theo id
//     getOneUser(){

//     }
// }
// let user = new UserController().getAllUser;
// module.exports = UserController;
// cách 2: tạo các function

const userService = require("../service/user.service.js");
async function getAllUser(req, res){
    let users = await userService.getAllUser();
    res.send(users);
}
module.exports = {
    getAllUser
}